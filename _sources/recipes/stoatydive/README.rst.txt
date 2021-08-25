:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stoatydive'
.. highlight: bash

stoatydive
==========

.. conda:recipe:: stoatydive
   :replaces_section_title:
   :noindex:

   StoatyDive is a tool to evaluate and classify predicted peak profiles to assess the binding specificity of a protein to its targets.

   :homepage: https://github.com/BackofenLab/StoatyDive
   :license: GPLv3
   :recipe: /`stoatydive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stoatydive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stoatydive/meta.yaml>`_

   


.. conda:package:: stoatydive

   |downloads_stoatydive| |docker_stoatydive|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.4-0``

      

   
   :depends bedtools: ``>=2.27.1``
   :depends matplotlib: 
   :depends numpy: 
   :depends python: 
   :depends r-base: 
   :depends r-data.table: 
   :depends r-umap: 
   :depends r-zoo: 
   :depends scipy: ``>=1.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stoatydive

   and update with::

      conda update stoatydive

   or use the docker container::

      docker pull quay.io/biocontainers/stoatydive:<tag>

   (see `stoatydive/tags`_ for valid values for ``<tag>``)


.. |downloads_stoatydive| image:: https://img.shields.io/conda/dn/bioconda/stoatydive.svg?style=flat
   :target: https://anaconda.org/bioconda/stoatydive
   :alt:   (downloads)
.. |docker_stoatydive| image:: https://quay.io/repository/biocontainers/stoatydive/status
   :target: https://quay.io/repository/biocontainers/stoatydive
.. _`stoatydive/tags`: https://quay.io/repository/biocontainers/stoatydive?tab=tags


.. raw:: html

    <script>
        var package = "stoatydive";
        var versions = ["1.1.0","1.1.0","1.1.0","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stoatydive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stoatydive/README.html