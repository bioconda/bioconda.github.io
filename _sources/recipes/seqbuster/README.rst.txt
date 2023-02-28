:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqbuster'
.. highlight: bash

seqbuster
=========

.. conda:recipe:: seqbuster
   :replaces_section_title:
   :noindex:

   miRNA and isomiR annotation

   :homepage: https://github.com/lpantano/seqbuster
   :license: MIT
   :recipe: /`seqbuster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqbuster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqbuster/meta.yaml>`_
   :links: biotools: :biotools:`seqbuster`

   


.. conda:package:: seqbuster

   |downloads_seqbuster| |docker_seqbuster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5-1</code>,  <code>3.5-0</code>,  <code>3.4-0</code>,  <code>3.2-1</code>,  <code>3.2-0</code>,  <code>3.1-3</code>,  <code>3.1-2</code>,  <code>3.1-1</code>,  <code>3.1a-0</code>,  </span></summary>
      

      ``3.5-1``,  ``3.5-0``,  ``3.4-0``,  ``3.2-1``,  ``3.2-0``,  ``3.1-3``,  ``3.1-2``,  ``3.1-1``,  ``3.1a-0``,  ``3.0-2``,  ``3.0-1``,  ``2.3-3``,  ``2.3-2``,  ``2.3-1``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqbuster

   and update with::

      conda update seqbuster

   or use the docker container::

      docker pull quay.io/biocontainers/seqbuster:<tag>

   (see `seqbuster/tags`_ for valid values for ``<tag>``)


.. |downloads_seqbuster| image:: https://img.shields.io/conda/dn/bioconda/seqbuster.svg?style=flat
   :target: https://anaconda.org/bioconda/seqbuster
   :alt:   (downloads)
.. |docker_seqbuster| image:: https://quay.io/repository/biocontainers/seqbuster/status
   :target: https://quay.io/repository/biocontainers/seqbuster
.. _`seqbuster/tags`: https://quay.io/repository/biocontainers/seqbuster?tab=tags


.. raw:: html

    <script>
        var package = "seqbuster";
        var versions = ["3.5","3.5","3.4","3.2","3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqbuster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqbuster/README.html