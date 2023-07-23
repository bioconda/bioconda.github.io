:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hhsuite'
.. highlight: bash

hhsuite
=======

.. conda:recipe:: hhsuite
   :replaces_section_title:
   :noindex:

   HH\-suite3 for fast remote homology detection and deep protein annotation

   :homepage: https://github.com/soedinglab/hh-suite
   :license: GPLv3
   :recipe: /`hhsuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hhsuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hhsuite/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-019-3019-7`, biotools: :biotools:`hh-suite`

   


.. conda:package:: hhsuite

   |downloads_hhsuite| |docker_hhsuite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.0-9</code>,  <code>3.3.0-8</code>,  <code>3.3.0-6</code>,  <code>3.3.0-5</code>,  <code>3.3.0-4</code>,  <code>3.3.0-3</code>,  <code>3.3.0-2</code>,  <code>3.3.0-1</code>,  <code>3.3.0-0</code>,  </span></summary>
      

      ``3.3.0-9``,  ``3.3.0-8``,  ``3.3.0-6``,  ``3.3.0-5``,  ``3.3.0-4``,  ``3.3.0-3``,  ``3.3.0-2``,  ``3.3.0-1``,  ``3.3.0-0``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``,  ``v3.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hhsuite

   and update with::

      conda update hhsuite

   or use the docker container::

      docker pull quay.io/biocontainers/hhsuite:<tag>

   (see `hhsuite/tags`_ for valid values for ``<tag>``)


.. |downloads_hhsuite| image:: https://img.shields.io/conda/dn/bioconda/hhsuite.svg?style=flat
   :target: https://anaconda.org/bioconda/hhsuite
   :alt:   (downloads)
.. |docker_hhsuite| image:: https://quay.io/repository/biocontainers/hhsuite/status
   :target: https://quay.io/repository/biocontainers/hhsuite
.. _`hhsuite/tags`: https://quay.io/repository/biocontainers/hhsuite?tab=tags


.. raw:: html

    <script>
        var package = "hhsuite";
        var versions = ["3.3.0","3.3.0","3.3.0","3.3.0","3.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hhsuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hhsuite/README.html