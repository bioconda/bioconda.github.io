:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snostrip'
.. highlight: bash

snostrip
========

.. conda:recipe:: snostrip
   :replaces_section_title:
   :noindex:

   Automatic snoRNA annotation pipeline

   :homepage: http://snostrip.bioinf.uni-leipzig.de/help.py
   :license: GPL3
   :recipe: /`snostrip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snostrip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snostrip/meta.yaml>`_

   


.. conda:package:: snostrip

   |downloads_snostrip| |docker_snostrip|

   :versions:
      
      

      ``2.0.2-6``,  ``2.0.2-5``,  ``2.0.2-4``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``

      

   
   :depends on blast-legacy: ``>=2.2.26,<3.0a0``
   :depends on infernal: ``>=1.1.5,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on muscle: ``>=5.3,<5.4.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on viennarna: ``>=2.7.0,<2.8.0a0``

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

    pixi global install snostrip

to add into an existing workspace instead, run::

    pixi add snostrip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snostrip

Alternatively, to install into a new environment, run::

    conda create -n envname snostrip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snostrip:<tag>

(see `snostrip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snostrip| image:: https://img.shields.io/conda/dn/bioconda/snostrip.svg?style=flat
   :target: https://anaconda.org/bioconda/snostrip
   :alt:   (downloads)
.. |docker_snostrip| image:: https://quay.io/repository/biocontainers/snostrip/status
   :target: https://quay.io/repository/biocontainers/snostrip
.. _`snostrip/tags`: https://quay.io/repository/biocontainers/snostrip?tab=tags


.. raw:: html

    <script>
        var package = "snostrip";
        var versions = ["2.0.2","2.0.2","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snostrip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snostrip/README.html