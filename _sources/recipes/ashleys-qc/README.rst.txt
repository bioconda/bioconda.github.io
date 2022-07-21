:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ashleys-qc'
.. highlight: bash

ashleys-qc
==========

.. conda:recipe:: ashleys-qc
   :replaces_section_title:
   :noindex:

   Automated Selection of High quality Libraries for the Extensive analYsis of Strandseq data \(ASHLEYS\).

   :homepage: https://github.com/friendsofstrandseq/ashleys-qc
   :license: MIT / MIT License
   :recipe: /`ashleys-qc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ashleys-qc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ashleys-qc/meta.yaml>`_

   


.. conda:package:: ashleys-qc

   |downloads_ashleys-qc| |docker_ashleys-qc|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends matplotlib-base: ``3.2.1.*``
   :depends pandas: ``1.1.2.*``
   :depends pip: 
   :depends pysam: ``0.16.0.1.*``
   :depends pytest: 
   :depends python: ``3.7.12.*``
   :depends scikit-learn: ``0.23.2.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ashleys-qc

   and update with::

      conda update ashleys-qc

   or use the docker container::

      docker pull quay.io/biocontainers/ashleys-qc:<tag>

   (see `ashleys-qc/tags`_ for valid values for ``<tag>``)


.. |downloads_ashleys-qc| image:: https://img.shields.io/conda/dn/bioconda/ashleys-qc.svg?style=flat
   :target: https://anaconda.org/bioconda/ashleys-qc
   :alt:   (downloads)
.. |docker_ashleys-qc| image:: https://quay.io/repository/biocontainers/ashleys-qc/status
   :target: https://quay.io/repository/biocontainers/ashleys-qc
.. _`ashleys-qc/tags`: https://quay.io/repository/biocontainers/ashleys-qc?tab=tags


.. raw:: html

    <script>
        var package = "ashleys-qc";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ashleys-qc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ashleys-qc/README.html