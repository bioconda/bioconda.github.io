:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hamroaster'
.. highlight: bash

hamroaster
==========

.. conda:recipe:: hamroaster
   :replaces_section_title:
   :noindex:

   An analysis pipeline to compare the output of different AMR detection tools and provide metrics of their performance

   :homepage: https://github.com/ewissel/hAMRoaster
   :license: CC0
   :recipe: /`hamroaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamroaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamroaster/meta.yaml>`_

   


.. conda:package:: hamroaster

   |downloads_hamroaster| |docker_hamroaster|

   :versions:
      
      

      ``2.0-0``,  ``1.1-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hamroaster

   and update with::

      conda update hamroaster

   or use the docker container::

      docker pull quay.io/biocontainers/hamroaster:<tag>

   (see `hamroaster/tags`_ for valid values for ``<tag>``)


.. |downloads_hamroaster| image:: https://img.shields.io/conda/dn/bioconda/hamroaster.svg?style=flat
   :target: https://anaconda.org/bioconda/hamroaster
   :alt:   (downloads)
.. |docker_hamroaster| image:: https://quay.io/repository/biocontainers/hamroaster/status
   :target: https://quay.io/repository/biocontainers/hamroaster
.. _`hamroaster/tags`: https://quay.io/repository/biocontainers/hamroaster?tab=tags


.. raw:: html

    <script>
        var package = "hamroaster";
        var versions = ["2.0","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hamroaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hamroaster/README.html