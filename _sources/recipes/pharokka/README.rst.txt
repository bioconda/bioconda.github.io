:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pharokka'
.. highlight: bash

pharokka
========

.. conda:recipe:: pharokka
   :replaces_section_title:
   :noindex:

   Fast Phage Annotation Program

   :homepage: https://github.com/gbouras13/pharokka
   :documentation: https://pharokka.readthedocs.io
   
   :license: MIT
   :recipe: /`pharokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pharokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pharokka/meta.yaml>`_

   


.. conda:package:: pharokka

   |downloads_pharokka| |docker_pharokka|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.1.11-0</code>,  <code>0.1.10-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  </span></summary>
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends aragorn: ``>=1.2.41``
   :depends bcbio-gff: 
   :depends biopython: ``>=1.78,<1.81``
   :depends mash: ``>=2.2``
   :depends minced: ``>=0.4.2``
   :depends mmseqs2: ``13.45111``
   :depends phanotate: ``>=1.5.0``
   :depends pyrodigal: ``>=2.0.1``
   :depends trnascan-se: ``>=2.0.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pharokka

   and update with::

      conda update pharokka

   or use the docker container::

      docker pull quay.io/biocontainers/pharokka:<tag>

   (see `pharokka/tags`_ for valid values for ``<tag>``)


.. |downloads_pharokka| image:: https://img.shields.io/conda/dn/bioconda/pharokka.svg?style=flat
   :target: https://anaconda.org/bioconda/pharokka
   :alt:   (downloads)
.. |docker_pharokka| image:: https://quay.io/repository/biocontainers/pharokka/status
   :target: https://quay.io/repository/biocontainers/pharokka
.. _`pharokka/tags`: https://quay.io/repository/biocontainers/pharokka?tab=tags


.. raw:: html

    <script>
        var package = "pharokka";
        var versions = ["1.2.1","1.2.0","1.1.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pharokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pharokka/README.html