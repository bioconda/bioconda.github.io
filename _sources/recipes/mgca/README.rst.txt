:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgca'
.. highlight: bash

mgca
====

.. conda:recipe:: mgca
   :replaces_section_title:
   :noindex:

   Microbial genome component and annotation pipeline

   :homepage: https://github.com/liaochenlanruo/mgca/blob/master/README.md
   :documentation: https://liaochenlanruo.fun/mgca/
   
   :developer docs: https://github.com/liaochenlanruo/mgca/tree/master
   :license: GPL / GPLv3
   :recipe: /`mgca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgca/meta.yaml>`_
   :links: biotools: :biotools:`mgca`

   Microbial genome component and annotation pipeline.


.. conda:package:: mgca

   |downloads_mgca| |docker_mgca|

   :versions:
      
      

      ``0.0.0-0``

      

   
   :depends on bakta: ``1.4.0.*``
   :depends on eggnog-mapper: ``2.1.7.*``
   :depends on emboss: 
   :depends on islandpath: ``1.0.6.*``
   :depends on lastz: ``1.04.15.*``
   :depends on mummer4: ``4.0.0rc1.*``
   :depends on opfi: ``0.1.2.*``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bioperl: 
   :depends on phispy: ``4.2.21.*``
   :depends on r-ggplot2: 
   :depends on repeatmasker: ``4.1.2.p1.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install mgca

to add into an existing workspace instead, run::

    pixi add mgca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mgca

Alternatively, to install into a new environment, run::

    conda create -n envname mgca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mgca:<tag>

(see `mgca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mgca| image:: https://img.shields.io/conda/dn/bioconda/mgca.svg?style=flat
   :target: https://anaconda.org/bioconda/mgca
   :alt:   (downloads)
.. |docker_mgca| image:: https://quay.io/repository/biocontainers/mgca/status
   :target: https://quay.io/repository/biocontainers/mgca
.. _`mgca/tags`: https://quay.io/repository/biocontainers/mgca?tab=tags


.. raw:: html

    <script>
        var package = "mgca";
        var versions = ["0.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgca/README.html