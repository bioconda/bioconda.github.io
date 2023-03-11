:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmnqc'
.. highlight: bash

hmnqc
=====

.. conda:recipe:: hmnqc
   :replaces_section_title:
   :noindex:

   Compute differents metrics about quality\, check identity and coverage from high\-throughput sequencing provided by targeted NGS

   :homepage: https://github.com/guillaume-gricourt/HmnQc
   :license: MIT
   :recipe: /`hmnqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnqc/meta.yaml>`_

   


.. conda:package:: hmnqc

   |downloads_hmnqc| |docker_hmnqc|

   :versions:
      
      

      ``0.5.1-0``

      

   
   :depends biopython: 
   :depends cnvkit: 
   :depends openpyxl: 
   :depends openssl: ``>=1.1.0,<=1.1.1``
   :depends pandas: 
   :depends pysam: 
   :depends python: 
   :depends pyyaml: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmnqc

   and update with::

      conda update hmnqc

   or use the docker container::

      docker pull quay.io/biocontainers/hmnqc:<tag>

   (see `hmnqc/tags`_ for valid values for ``<tag>``)


.. |downloads_hmnqc| image:: https://img.shields.io/conda/dn/bioconda/hmnqc.svg?style=flat
   :target: https://anaconda.org/bioconda/hmnqc
   :alt:   (downloads)
.. |docker_hmnqc| image:: https://quay.io/repository/biocontainers/hmnqc/status
   :target: https://quay.io/repository/biocontainers/hmnqc
.. _`hmnqc/tags`: https://quay.io/repository/biocontainers/hmnqc?tab=tags


.. raw:: html

    <script>
        var package = "hmnqc";
        var versions = ["0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmnqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmnqc/README.html