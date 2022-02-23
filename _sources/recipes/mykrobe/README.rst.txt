:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mykrobe'
.. highlight: bash

mykrobe
=======

.. conda:recipe:: mykrobe
   :replaces_section_title:
   :noindex:

   Antibiotic resistance prediction in minutes

   :homepage: https://github.com/Mykrobe-tools/mykrobe
   :license: MIT
   :recipe: /`mykrobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykrobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykrobe/meta.yaml>`_

   Rapid antibiotic\-resistance predictions from genome sequence data for Staphylococcus aureus and Mycobacterium tuberculosis.


.. conda:package:: mykrobe

   |downloads_mykrobe| |docker_mykrobe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-1</code>,  <code>0.10.0-0</code>,  <code>0.9.0-3</code>,  <code>0.9.0-2</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.2-1</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  </span></summary>
      

      ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-3``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.0-5``,  ``0.7.0-4``,  ``0.7.0-3``,  ``0.7.0-2``,  ``0.7.0-0``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.6-1``,  ``0.5.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends anytree: 
   :depends biopython: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends mongodb: ``>3.0``
   :depends mongoengine: ``>=0.18.0``
   :depends numpy: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends pyvcf: 
   :depends requests: 
   :depends wget: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mykrobe

   and update with::

      conda update mykrobe

   or use the docker container::

      docker pull quay.io/biocontainers/mykrobe:<tag>

   (see `mykrobe/tags`_ for valid values for ``<tag>``)


.. |downloads_mykrobe| image:: https://img.shields.io/conda/dn/bioconda/mykrobe.svg?style=flat
   :target: https://anaconda.org/bioconda/mykrobe
   :alt:   (downloads)
.. |docker_mykrobe| image:: https://quay.io/repository/biocontainers/mykrobe/status
   :target: https://quay.io/repository/biocontainers/mykrobe
.. _`mykrobe/tags`: https://quay.io/repository/biocontainers/mykrobe?tab=tags


.. raw:: html

    <script>
        var package = "mykrobe";
        var versions = ["0.10.0","0.10.0","0.9.0","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mykrobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mykrobe/README.html