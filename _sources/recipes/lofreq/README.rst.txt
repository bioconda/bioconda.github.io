:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lofreq'
.. highlight: bash

lofreq
======

.. conda:recipe:: lofreq
   :replaces_section_title:
   :noindex:

   A fast and sensitive variant\-caller for inferring SNVs and indels from next\-generation sequencing data

   :homepage: http://csb5.github.io/lofreq/
   :license: MIT
   :recipe: /`lofreq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lofreq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lofreq/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`lofreq_call`

   


.. conda:package:: lofreq

   |downloads_lofreq| |docker_lofreq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.5-5</code>,  <code>2.1.5-4</code>,  <code>2.1.5-3</code>,  <code>2.1.5-2</code>,  <code>2.1.5-1</code>,  <code>2.1.5-0</code>,  <code>2.1.4-3</code>,  <code>2.1.4-2</code>,  <code>2.1.3.1-0</code>,  </span></summary>
      

      ``2.1.5-5``,  ``2.1.5-4``,  ``2.1.5-3``,  ``2.1.5-2``,  ``2.1.5-1``,  ``2.1.5-0``,  ``2.1.4-3``,  ``2.1.4-2``,  ``2.1.3.1-0``,  ``2.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lofreq

   and update with::

      conda update lofreq

   or use the docker container::

      docker pull quay.io/biocontainers/lofreq:<tag>

   (see `lofreq/tags`_ for valid values for ``<tag>``)


.. |downloads_lofreq| image:: https://img.shields.io/conda/dn/bioconda/lofreq.svg?style=flat
   :target: https://anaconda.org/bioconda/lofreq
   :alt:   (downloads)
.. |docker_lofreq| image:: https://quay.io/repository/biocontainers/lofreq/status
   :target: https://quay.io/repository/biocontainers/lofreq
.. _`lofreq/tags`: https://quay.io/repository/biocontainers/lofreq?tab=tags


.. raw:: html

    <script>
        var package = "lofreq";
        var versions = ["2.1.5","2.1.5","2.1.5","2.1.5","2.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lofreq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lofreq/README.html