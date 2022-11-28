:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'captus'
.. highlight: bash

captus
======

.. conda:recipe:: captus
   :replaces_section_title:
   :noindex:

   Captus\: Assembly of Phylogenomic Datasets from High\-Throughput Sequencing data

   :homepage: https://github.com/edgardomortiz/Captus
   :license: GPL3
   :recipe: /`captus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/captus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/captus/meta.yaml>`_

   


.. conda:package:: captus

   |downloads_captus| |docker_captus|

   :versions:
      
      

      ``0.9.89-0``,  ``0.9.88-1``,  ``0.9.88-0``,  ``0.9.86-0``,  ``0.9.85-0``,  ``0.9.84-1``,  ``0.9.84-0``,  ``0.9.83-0``

      

   
   :depends bbmap: 
   :depends clipkit: ``>=1.3.0``
   :depends falco: ``>=0.3.0``
   :depends fastqc: 
   :depends mafft: 
   :depends megahit: 
   :depends mmseqs2: 
   :depends muscle: ``>=5``
   :depends pandas: 
   :depends perl-bioperl-core: ``1.007002.*``
   :depends pigz: 
   :depends pip: 
   :depends plotly: 
   :depends python: ``>=3.6``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install captus

   and update with::

      conda update captus

   or use the docker container::

      docker pull quay.io/biocontainers/captus:<tag>

   (see `captus/tags`_ for valid values for ``<tag>``)


.. |downloads_captus| image:: https://img.shields.io/conda/dn/bioconda/captus.svg?style=flat
   :target: https://anaconda.org/bioconda/captus
   :alt:   (downloads)
.. |docker_captus| image:: https://quay.io/repository/biocontainers/captus/status
   :target: https://quay.io/repository/biocontainers/captus
.. _`captus/tags`: https://quay.io/repository/biocontainers/captus?tab=tags


.. raw:: html

    <script>
        var package = "captus";
        var versions = ["0.9.89","0.9.88","0.9.88","0.9.86","0.9.85"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/captus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/captus/README.html