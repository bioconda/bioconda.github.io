:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r2r'
.. highlight: bash

r2r
===

.. conda:recipe:: r2r
   :replaces_section_title:
   :noindex:

   software to speed depiction of aesthetic consensus RNA secondary structures

   :homepage: http://breaker.research.yale.edu/R2R/
   :license: GPL-2
   :recipe: /`r2r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r2r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r2r/meta.yaml>`_

   


.. conda:package:: r2r

   |downloads_r2r| |docker_r2r|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.6-4</code>,  <code>1.0.6-3</code>,  <code>1.0.6-2</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.5-3</code>,  <code>1.0.5-2</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  </span></summary>
      

      ``1.0.6-4``,  ``1.0.6-3``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-clone: ``0.46.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r2r

   and update with::

      conda update r2r

   or use the docker container::

      docker pull quay.io/biocontainers/r2r:<tag>

   (see `r2r/tags`_ for valid values for ``<tag>``)


.. |downloads_r2r| image:: https://img.shields.io/conda/dn/bioconda/r2r.svg?style=flat
   :target: https://anaconda.org/bioconda/r2r
   :alt:   (downloads)
.. |docker_r2r| image:: https://quay.io/repository/biocontainers/r2r/status
   :target: https://quay.io/repository/biocontainers/r2r
.. _`r2r/tags`: https://quay.io/repository/biocontainers/r2r?tab=tags


.. raw:: html

    <script>
        var package = "r2r";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.6","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r2r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r2r/README.html