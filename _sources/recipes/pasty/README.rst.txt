:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pasty'
.. highlight: bash

pasty
=====

.. conda:recipe:: pasty
   :replaces_section_title:
   :noindex:

   A tool easily taken advantage of for in silico serogrouping of Pseudomonas aeruginosa isolates

   :homepage: https://github.com/rpetit3/pasty
   :license: Apache-2.0
   :recipe: /`pasty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasty/meta.yaml>`_

   


.. conda:package:: pasty

   |downloads_pasty| |docker_pasty|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends blast: 
   :depends executor: 
   :depends python: ``>=3.7``
   :depends rich-click: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pasty

   and update with::

      conda update pasty

   or use the docker container::

      docker pull quay.io/biocontainers/pasty:<tag>

   (see `pasty/tags`_ for valid values for ``<tag>``)


.. |downloads_pasty| image:: https://img.shields.io/conda/dn/bioconda/pasty.svg?style=flat
   :target: https://anaconda.org/bioconda/pasty
   :alt:   (downloads)
.. |docker_pasty| image:: https://quay.io/repository/biocontainers/pasty/status
   :target: https://quay.io/repository/biocontainers/pasty
.. _`pasty/tags`: https://quay.io/repository/biocontainers/pasty?tab=tags


.. raw:: html

    <script>
        var package = "pasty";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pasty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pasty/README.html