:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zavolan-multiqc-plugins'
.. highlight: bash

zavolan-multiqc-plugins
=======================

.. conda:recipe:: zavolan-multiqc-plugins
   :replaces_section_title:
   :noindex:

   MultiQC plugins for the Zavolan Lab\@ University of Basel\, Switzerland

   :homepage: https://github.com/zavolanlab/multiqc-plugins
   :license: APACHE / Apache Software
   :recipe: /`zavolan-multiqc-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zavolan-multiqc-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zavolan-multiqc-plugins/meta.yaml>`_

   


.. conda:package:: zavolan-multiqc-plugins

   |downloads_zavolan-multiqc-plugins| |docker_zavolan-multiqc-plugins|

   :versions:
      
      

      ``1.3-0``

      

   
   :depends multiqc: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zavolan-multiqc-plugins

   and update with::

      conda update zavolan-multiqc-plugins

   or use the docker container::

      docker pull quay.io/biocontainers/zavolan-multiqc-plugins:<tag>

   (see `zavolan-multiqc-plugins/tags`_ for valid values for ``<tag>``)


.. |downloads_zavolan-multiqc-plugins| image:: https://img.shields.io/conda/dn/bioconda/zavolan-multiqc-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/zavolan-multiqc-plugins
   :alt:   (downloads)
.. |docker_zavolan-multiqc-plugins| image:: https://quay.io/repository/biocontainers/zavolan-multiqc-plugins/status
   :target: https://quay.io/repository/biocontainers/zavolan-multiqc-plugins
.. _`zavolan-multiqc-plugins/tags`: https://quay.io/repository/biocontainers/zavolan-multiqc-plugins?tab=tags


.. raw:: html

    <script>
        var package = "zavolan-multiqc-plugins";
        var versions = ["1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zavolan-multiqc-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zavolan-multiqc-plugins/README.html