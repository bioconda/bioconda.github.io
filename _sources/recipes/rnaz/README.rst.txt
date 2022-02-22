:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaz'
.. highlight: bash

rnaz
====

.. conda:recipe:: rnaz
   :replaces_section_title:
   :noindex:

   predicting structural noncoding RNAs

   :homepage: https://www.tbi.univie.ac.at/~wash/RNAz/
   :license: MIT-like
   :recipe: /`rnaz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaz/meta.yaml>`_
   :links: biotools: :biotools:`rnaz`

   


.. conda:package:: rnaz

   |downloads_rnaz| |docker_rnaz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-4</code>,  <code>2.1.1-3</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1-4</code>,  <code>2.1-3</code>,  <code>2.1-2</code>,  <code>2.1-1</code>,  </span></summary>
      

      ``2.1.1-4``,  ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnaz

   and update with::

      conda update rnaz

   or use the docker container::

      docker pull quay.io/biocontainers/rnaz:<tag>

   (see `rnaz/tags`_ for valid values for ``<tag>``)


.. |downloads_rnaz| image:: https://img.shields.io/conda/dn/bioconda/rnaz.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaz
   :alt:   (downloads)
.. |docker_rnaz| image:: https://quay.io/repository/biocontainers/rnaz/status
   :target: https://quay.io/repository/biocontainers/rnaz
.. _`rnaz/tags`: https://quay.io/repository/biocontainers/rnaz?tab=tags


.. raw:: html

    <script>
        var package = "rnaz";
        var versions = ["2.1.1","2.1.1","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaz/README.html