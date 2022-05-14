:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microbeannotator'
.. highlight: bash

microbeannotator
================

.. conda:recipe:: microbeannotator
   :replaces_section_title:
   :noindex:

   A user friendly microbe genome annotation tool

   :homepage: https://github.com/cruizperez/MicrobeAnnotator
   :license: Artistic License 2.0
   :recipe: /`microbeannotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microbeannotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microbeannotator/meta.yaml>`_

   


.. conda:package:: microbeannotator

   |downloads_microbeannotator| |docker_microbeannotator|

   :versions:
      
      

      ``2.0.5-0``

      

   
   :depends python: ``>=3.6,<3.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install microbeannotator

   and update with::

      conda update microbeannotator

   or use the docker container::

      docker pull quay.io/biocontainers/microbeannotator:<tag>

   (see `microbeannotator/tags`_ for valid values for ``<tag>``)


.. |downloads_microbeannotator| image:: https://img.shields.io/conda/dn/bioconda/microbeannotator.svg?style=flat
   :target: https://anaconda.org/bioconda/microbeannotator
   :alt:   (downloads)
.. |docker_microbeannotator| image:: https://quay.io/repository/biocontainers/microbeannotator/status
   :target: https://quay.io/repository/biocontainers/microbeannotator
.. _`microbeannotator/tags`: https://quay.io/repository/biocontainers/microbeannotator?tab=tags


.. raw:: html

    <script>
        var package = "microbeannotator";
        var versions = ["2.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microbeannotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microbeannotator/README.html