:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trgt'
.. highlight: bash

trgt
====

.. conda:recipe:: trgt
   :replaces_section_title:
   :noindex:

   Tandem repeat genotyping and visualization from PacBio HiFi data

   :homepage: https://github.com/PacificBiosciences/trgt
   :license: BSD-3-Clause-Clear
   :recipe: /`trgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trgt/meta.yaml>`_

   


.. conda:package:: trgt

   |downloads_trgt| |docker_trgt|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.3-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trgt

   and update with::

      conda update trgt

   or use the docker container::

      docker pull quay.io/biocontainers/trgt:<tag>

   (see `trgt/tags`_ for valid values for ``<tag>``)


.. |downloads_trgt| image:: https://img.shields.io/conda/dn/bioconda/trgt.svg?style=flat
   :target: https://anaconda.org/bioconda/trgt
   :alt:   (downloads)
.. |docker_trgt| image:: https://quay.io/repository/biocontainers/trgt/status
   :target: https://quay.io/repository/biocontainers/trgt
.. _`trgt/tags`: https://quay.io/repository/biocontainers/trgt?tab=tags


.. raw:: html

    <script>
        var package = "trgt";
        var versions = ["0.3.4","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trgt/README.html