:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hitac'
.. highlight: bash

hitac
=====

.. conda:recipe:: hitac
   :replaces_section_title:
   :noindex:

   A hierarchical taxonomic classifier for fungal ITS sequences

   :homepage: https://github.com/mirand863/hitac
   :license: BSD / BSD-3-Clause
   :recipe: /`hitac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hitac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hitac/meta.yaml>`_
   :links: biotools: :biotools:`hitac`

   HiTaC is a software for hierarchical taxonomic classification
   for fungal ITS sequences. It is pure python code compatible with
   Python 3.8\+ and requires hiclass\, numpy\, pandas\, scikit\-bio and
   scikit\-learn.



.. conda:package:: hitac

   |downloads_hitac| |docker_hitac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.29-0</code>,  <code>2.0.28-0</code>,  <code>2.0.23-0</code>,  <code>2.0.22-0</code>,  <code>2.0.21-1</code>,  <code>2.0.21-0</code>,  <code>2.0.20-1</code>,  <code>2.0.20-0</code>,  <code>2.0.19-0</code>,  </span></summary>
      

      ``2.0.29-0``,  ``2.0.28-0``,  ``2.0.23-0``,  ``2.0.22-0``,  ``2.0.21-1``,  ``2.0.21-0``,  ``2.0.20-1``,  ``2.0.20-0``,  ``2.0.19-0``,  ``2.0.16-0``,  ``2.0.15-0``,  ``2.0.10-1``,  ``2.0.10-0``,  ``2.0.9-1``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.4-0``,  ``1.5.1-0``,  ``1.4-0``,  ``1.3-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends hiclass: ``4.1.7``
   :depends numpy: ``>=1.22.3``
   :depends pandas: ``>=1.4.3``
   :depends python: ``>=3.7``
   :depends scikit-bio: ``>=0.5``
   :depends scikit-learn: ``>=0.24``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hitac

   and update with::

      conda update hitac

   or use the docker container::

      docker pull quay.io/biocontainers/hitac:<tag>

   (see `hitac/tags`_ for valid values for ``<tag>``)


.. |downloads_hitac| image:: https://img.shields.io/conda/dn/bioconda/hitac.svg?style=flat
   :target: https://anaconda.org/bioconda/hitac
   :alt:   (downloads)
.. |docker_hitac| image:: https://quay.io/repository/biocontainers/hitac/status
   :target: https://quay.io/repository/biocontainers/hitac
.. _`hitac/tags`: https://quay.io/repository/biocontainers/hitac?tab=tags


.. raw:: html

    <script>
        var package = "hitac";
        var versions = ["2.0.29","2.0.28","2.0.23","2.0.22","2.0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hitac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hitac/README.html