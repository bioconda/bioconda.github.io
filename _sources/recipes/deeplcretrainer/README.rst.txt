:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeplcretrainer'
.. highlight: bash

deeplcretrainer
===============

.. conda:recipe:: deeplcretrainer
   :replaces_section_title:
   :noindex:

   Evaluating DeepLC performance and retraining prediction models.

   :homepage: https://github.com/RobbinBouwmeester/DeepLCRetrainer
   :license: Apache-2.0
   :recipe: /`deeplcretrainer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplcretrainer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplcretrainer/meta.yaml>`_

   


.. conda:package:: deeplcretrainer

   |downloads_deeplcretrainer| |docker_deeplcretrainer|

   :versions:
      
      

      ``0.1.19-0``,  ``0.1.17-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deeplcretrainer

   and update with::

      conda update deeplcretrainer

   or use the docker container::

      docker pull quay.io/biocontainers/deeplcretrainer:<tag>

   (see `deeplcretrainer/tags`_ for valid values for ``<tag>``)


.. |downloads_deeplcretrainer| image:: https://img.shields.io/conda/dn/bioconda/deeplcretrainer.svg?style=flat
   :target: https://anaconda.org/bioconda/deeplcretrainer
   :alt:   (downloads)
.. |docker_deeplcretrainer| image:: https://quay.io/repository/biocontainers/deeplcretrainer/status
   :target: https://quay.io/repository/biocontainers/deeplcretrainer
.. _`deeplcretrainer/tags`: https://quay.io/repository/biocontainers/deeplcretrainer?tab=tags


.. raw:: html

    <script>
        var package = "deeplcretrainer";
        var versions = ["0.1.19","0.1.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeplcretrainer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeplcretrainer/README.html