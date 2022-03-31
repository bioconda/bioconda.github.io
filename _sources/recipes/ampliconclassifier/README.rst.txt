:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampliconclassifier'
.. highlight: bash

ampliconclassifier
==================

.. conda:recipe:: ampliconclassifier
   :replaces_section_title:
   :noindex:

   AmpliconClassifier classifies the output of AmpliconArchitect to detect different types of focal amplifications.


   :homepage: https://github.com/jluebeck/AmpliconClassifier
   :license: BSD / BSD 2-Clause
   :recipe: /`ampliconclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconclassifier/meta.yaml>`_

   


.. conda:package:: ampliconclassifier

   |downloads_ampliconclassifier| |docker_ampliconclassifier|

   :versions:
      
      

      ``0.4.5-1``,  ``0.4.5-0``

      

   
   :depends intervaltree: 
   :depends matplotlib-base: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ampliconclassifier

   and update with::

      conda update ampliconclassifier

   or use the docker container::

      docker pull quay.io/biocontainers/ampliconclassifier:<tag>

   (see `ampliconclassifier/tags`_ for valid values for ``<tag>``)


.. |downloads_ampliconclassifier| image:: https://img.shields.io/conda/dn/bioconda/ampliconclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/ampliconclassifier
   :alt:   (downloads)
.. |docker_ampliconclassifier| image:: https://quay.io/repository/biocontainers/ampliconclassifier/status
   :target: https://quay.io/repository/biocontainers/ampliconclassifier
.. _`ampliconclassifier/tags`: https://quay.io/repository/biocontainers/ampliconclassifier?tab=tags


.. raw:: html

    <script>
        var package = "ampliconclassifier";
        var versions = ["0.4.5","0.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampliconclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampliconclassifier/README.html