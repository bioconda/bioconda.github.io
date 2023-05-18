:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rtfbs'
.. highlight: bash

r-rtfbs
=======

.. conda:recipe:: r-rtfbs
   :replaces_section_title:
   :noindex:

   Identifies and scores possible Transcription Factor Binding Sites and allows for FDR analysis and pruning.  It supports splitting of sequences based on size or a specified GFF\, grouping by G\+C content\, and specification of Markov model order.  The heavy lifting is done in C while all results are made available via R.

   :homepage: http://compgen.cshl.edu/rtfbs
   :license: BSD / BSD_3_clause
   :recipe: /`r-rtfbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rtfbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rtfbs/meta.yaml>`_

   


.. conda:package:: r-rtfbs

   |downloads_r-rtfbs| |docker_r-rtfbs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.15-7</code>,  <code>0.3.15-6</code>,  <code>0.3.15-5</code>,  <code>0.3.15-4</code>,  <code>0.3.15-3</code>,  <code>0.3.15-2</code>,  <code>0.3.15-1</code>,  <code>0.3.15-0</code>,  <code>0.3.9-3</code>,  </span></summary>
      

      ``0.3.15-7``,  ``0.3.15-6``,  ``0.3.15-5``,  ``0.3.15-4``,  ``0.3.15-3``,  ``0.3.15-2``,  ``0.3.15-1``,  ``0.3.15-0``,  ``0.3.9-3``,  ``0.3.9-2``,  ``0.3.9-1``,  ``0.3.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-rphast: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rtfbs

   and update with::

      conda update r-rtfbs

   or use the docker container::

      docker pull quay.io/biocontainers/r-rtfbs:<tag>

   (see `r-rtfbs/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rtfbs| image:: https://img.shields.io/conda/dn/bioconda/r-rtfbs.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rtfbs
   :alt:   (downloads)
.. |docker_r-rtfbs| image:: https://quay.io/repository/biocontainers/r-rtfbs/status
   :target: https://quay.io/repository/biocontainers/r-rtfbs
.. _`r-rtfbs/tags`: https://quay.io/repository/biocontainers/r-rtfbs?tab=tags


.. raw:: html

    <script>
        var package = "r-rtfbs";
        var versions = ["0.3.15","0.3.15","0.3.15","0.3.15","0.3.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rtfbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rtfbs/README.html