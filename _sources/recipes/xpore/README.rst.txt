:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xpore'
.. highlight: bash

xpore
=====

.. conda:recipe:: xpore
   :replaces_section_title:
   :noindex:

   xpore is a python package for Nanopore data analysis of differential RNA modifications.

   :homepage: https://github.com/GoekeLab/xpore
   :documentation: https://xpore.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/GoekeLab/xpore.git
   :license: MIT / MIT
   :recipe: /`xpore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpore/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.06.18.160010`, biotools: :biotools:`xpore`

   


.. conda:package:: xpore

   |downloads_xpore| |docker_xpore|

   :versions:
      
      

      ``2.1-0``,  ``2.0-0``,  ``1.0-0``,  ``0.5.6-0``

      

   
   :depends on h5py: ``>=2.10.0``
   :depends on numpy: ``>=1.18.0``
   :depends on pandas: ``>=0.25.3``
   :depends on pyensembl: ``>=1.8.5``
   :depends on python: 
   :depends on pyyaml: 
   :depends on scipy: ``>=1.4.1``
   :depends on ujson: ``>=4.0.1``

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

    pixi global install xpore

to add into an existing workspace instead, run::

    pixi add xpore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install xpore

Alternatively, to install into a new environment, run::

    conda create -n envname xpore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/xpore:<tag>

(see `xpore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_xpore| image:: https://img.shields.io/conda/dn/bioconda/xpore.svg?style=flat
   :target: https://anaconda.org/bioconda/xpore
   :alt:   (downloads)
.. |docker_xpore| image:: https://quay.io/repository/biocontainers/xpore/status
   :target: https://quay.io/repository/biocontainers/xpore
.. _`xpore/tags`: https://quay.io/repository/biocontainers/xpore?tab=tags


.. raw:: html

    <script>
        var package = "xpore";
        var versions = ["2.1","2.0","1.0","0.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xpore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xpore/README.html