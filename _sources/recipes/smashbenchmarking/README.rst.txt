:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smashbenchmarking'
.. highlight: bash

smashbenchmarking
=================

.. conda:recipe:: smashbenchmarking
   :replaces_section_title:
   :noindex:

   Check the accuracy of one VCF callset against another

   :homepage: http://github.com/amplab/smash/
   :license: BSD License
   :recipe: /`smashbenchmarking <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smashbenchmarking>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smashbenchmarking/meta.yaml>`_

   


.. conda:package:: smashbenchmarking

   |downloads_smashbenchmarking| |docker_smashbenchmarking|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends numpy: 
   :depends pyfasta: 
   :depends python: ``2.7*``
   :depends pyvcf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smashbenchmarking

   and update with::

      conda update smashbenchmarking

   or use the docker container::

      docker pull quay.io/biocontainers/smashbenchmarking:<tag>

   (see `smashbenchmarking/tags`_ for valid values for ``<tag>``)


.. |downloads_smashbenchmarking| image:: https://img.shields.io/conda/dn/bioconda/smashbenchmarking.svg?style=flat
   :target: https://anaconda.org/bioconda/smashbenchmarking
   :alt:   (downloads)
.. |docker_smashbenchmarking| image:: https://quay.io/repository/biocontainers/smashbenchmarking/status
   :target: https://quay.io/repository/biocontainers/smashbenchmarking
.. _`smashbenchmarking/tags`: https://quay.io/repository/biocontainers/smashbenchmarking?tab=tags


.. raw:: html

    <script>
        var package = "smashbenchmarking";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smashbenchmarking/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smashbenchmarking/README.html