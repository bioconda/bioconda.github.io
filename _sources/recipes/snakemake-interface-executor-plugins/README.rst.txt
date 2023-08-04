:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-interface-executor-plugins'
.. highlight: bash

snakemake-interface-executor-plugins
====================================

.. conda:recipe:: snakemake-interface-executor-plugins
   :replaces_section_title:
   :noindex:

   This package provides a stable interface for interactions between Snakemake and its executor plugins.

   :homepage: https://github.com/snakemake/snakemake-interface-executor-plugins
   :license: MIT
   :recipe: /`snakemake-interface-executor-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-executor-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-executor-plugins/meta.yaml>`_

   


.. conda:package:: snakemake-interface-executor-plugins

   |downloads_snakemake-interface-executor-plugins| |docker_snakemake-interface-executor-plugins|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends argparse-dataclass: ``>=2.0.0,<3.0.0``
   :depends python: ``>=3.9.0,<4.0.0``
   :depends throttler: ``>=1.2.2,<2.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakemake-interface-executor-plugins

   and update with::

      conda update snakemake-interface-executor-plugins

   or use the docker container::

      docker pull quay.io/biocontainers/snakemake-interface-executor-plugins:<tag>

   (see `snakemake-interface-executor-plugins/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-interface-executor-plugins| image:: https://img.shields.io/conda/dn/bioconda/snakemake-interface-executor-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-interface-executor-plugins
   :alt:   (downloads)
.. |docker_snakemake-interface-executor-plugins| image:: https://quay.io/repository/biocontainers/snakemake-interface-executor-plugins/status
   :target: https://quay.io/repository/biocontainers/snakemake-interface-executor-plugins
.. _`snakemake-interface-executor-plugins/tags`: https://quay.io/repository/biocontainers/snakemake-interface-executor-plugins?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-interface-executor-plugins";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-interface-executor-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-interface-executor-plugins/README.html