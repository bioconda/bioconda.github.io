:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gatk4'
.. highlight: bash

gatk4
=====

.. conda:recipe:: gatk4
   :replaces_section_title:
   :noindex:

   Genome Analysis Toolkit \(GATK4\)

   :homepage: https://www.broadinstitute.org/gatk/
   :developer docs: https://github.com/broadinstitute/gatk
   :license: BSD / BSD-3-Clause
   :recipe: /`gatk4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk4/meta.yaml>`_

   


.. conda:package:: gatk4

   |downloads_gatk4| |docker_gatk4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.6.1-0</code>,  <code>4.2.6.0-0</code>,  <code>4.2.5.0-0</code>,  <code>4.2.4.1-0</code>,  <code>4.2.4.0-0</code>,  <code>4.2.3.0-1</code>,  <code>4.2.3.0-0</code>,  <code>4.2.2.0-1</code>,  <code>4.2.2.0-0</code>,  </span></summary>
      

      ``4.2.6.1-0``,  ``4.2.6.0-0``,  ``4.2.5.0-0``,  ``4.2.4.1-0``,  ``4.2.4.0-0``,  ``4.2.3.0-1``,  ``4.2.3.0-0``,  ``4.2.2.0-1``,  ``4.2.2.0-0``,  ``4.2.1.0-0``,  ``4.2.0.0-1``,  ``4.2.0.0-0``,  ``4.1.9.0-0``,  ``4.1.8.1-0``,  ``4.1.8.0-0``,  ``4.1.7.0-0``,  ``4.1.6.0-0``,  ``4.1.5.0-1``,  ``4.1.5.0-0``,  ``4.1.4.1-1``,  ``4.1.4.1-0``,  ``4.1.4.0-1``,  ``4.1.4.0-0``,  ``4.1.3.0-0``,  ``4.1.2.0-1``,  ``4.1.2.0-0``,  ``4.1.1.0-0``,  ``4.1.0.0-0``,  ``4.0.12.0-0``,  ``4.0.11.0-0``,  ``4.0.10.0-0``,  ``4.0.9.0-0``,  ``4.0.8.1-0``,  ``4.0.7.0-0``,  ``4.0.6.0-0``,  ``4.0.5.2-0``,  ``4.0.5.1-0``,  ``4.0.4.0-0``,  ``4.0.3.0-1``,  ``4.0.3.0-0``,  ``4.0.2.1-0``,  ``4.0.2.0-0``,  ``4.0.1.2-0``,  ``4.0.1.1-0``,  ``4.0.1.0-0``,  ``4.0.0.0-0``,  ``4.0b6-0``,  ``4.0b5-0``,  ``4.0b4-0``,  ``4.0b3-0``,  ``4.0b2-0``,  ``4.0b1-0``,  ``4.0a1.2.7.2-2``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8,<12``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gatk4

   and update with::

      conda update gatk4

   or use the docker container::

      docker pull quay.io/biocontainers/gatk4:<tag>

   (see `gatk4/tags`_ for valid values for ``<tag>``)


.. |downloads_gatk4| image:: https://img.shields.io/conda/dn/bioconda/gatk4.svg?style=flat
   :target: https://anaconda.org/bioconda/gatk4
   :alt:   (downloads)
.. |docker_gatk4| image:: https://quay.io/repository/biocontainers/gatk4/status
   :target: https://quay.io/repository/biocontainers/gatk4
.. _`gatk4/tags`: https://quay.io/repository/biocontainers/gatk4?tab=tags


.. raw:: html

    <script>
        var package = "gatk4";
        var versions = ["4.2.6.1","4.2.6.0","4.2.5.0","4.2.4.1","4.2.4.0"];
    </script>


.. conda:package:: gatk4-spark

   |downloads_gatk4-spark| |docker_gatk4-spark|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.6.1-0</code>,  <code>4.2.6.0-0</code>,  <code>4.2.5.0-0</code>,  <code>4.2.4.1-0</code>,  <code>4.2.4.0-0</code>,  <code>4.2.3.0-1</code>,  <code>4.2.3.0-0</code>,  <code>4.2.2.0-1</code>,  <code>4.2.2.0-0</code>,  </span></summary>
      

      ``4.2.6.1-0``,  ``4.2.6.0-0``,  ``4.2.5.0-0``,  ``4.2.4.1-0``,  ``4.2.4.0-0``,  ``4.2.3.0-1``,  ``4.2.3.0-0``,  ``4.2.2.0-1``,  ``4.2.2.0-0``,  ``4.2.1.0-0``,  ``4.2.0.0-1``,  ``4.2.0.0-0``,  ``4.1.9.0-0``,  ``4.1.8.1-0``,  ``4.1.8.0-0``,  ``4.1.7.0-0``,  ``4.1.6.0-0``,  ``4.1.5.0-1``,  ``4.1.5.0-0``,  ``4.1.4.1-1``,  ``4.1.4.1-0``,  ``4.1.4.0-1``,  ``4.1.4.0-0``,  ``4.1.3.0-0``,  ``4.1.2.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends gatk4: ``4.2.6.1 hdfd78af_0``
   :depends openjdk: ``>=8,<12``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gatk4-spark

   and update with::

      conda update gatk4-spark

   or use the docker container::

      docker pull quay.io/biocontainers/gatk4-spark:<tag>

   (see `gatk4-spark/tags`_ for valid values for ``<tag>``)


.. |downloads_gatk4-spark| image:: https://img.shields.io/conda/dn/bioconda/gatk4-spark.svg?style=flat
   :target: https://anaconda.org/bioconda/gatk4-spark
   :alt:   (downloads)
.. |docker_gatk4-spark| image:: https://quay.io/repository/biocontainers/gatk4/status
   :target: https://quay.io/repository/biocontainers/gatk4
.. _`gatk4-spark/tags`: https://quay.io/repository/biocontainers/gatk4-spark?tab=tags


.. raw:: html

    <script>
        var package = "gatk4";
        var versions = ["4.2.6.1","4.2.6.0","4.2.5.0","4.2.4.1","4.2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatk4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatk4/README.html