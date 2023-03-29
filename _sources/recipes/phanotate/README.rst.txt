:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phanotate'
.. highlight: bash

phanotate
=========

.. conda:recipe:: phanotate
   :replaces_section_title:
   :noindex:

   Phanotate gene caller for phages

   :homepage: https://github.com/deprekate/PHANOTATE
   :documentation: https://github.com/deprekate/PHANOTATE/blob/master/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`phanotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phanotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phanotate/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics`

   


.. conda:package:: phanotate

   |downloads_phanotate| |docker_phanotate|

   :versions:
      
      

      ``1.5.1-0``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``

      

   
   :depends backports.tempfile: 
   :depends fastpath: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: 
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scipy: 
   :depends seaborn: 
   :depends setuptools: 
   :depends statsmodels: 
   :depends textwrap3: 
   :depends trnascan-se: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phanotate

   and update with::

      conda update phanotate

   or use the docker container::

      docker pull quay.io/biocontainers/phanotate:<tag>

   (see `phanotate/tags`_ for valid values for ``<tag>``)


.. |downloads_phanotate| image:: https://img.shields.io/conda/dn/bioconda/phanotate.svg?style=flat
   :target: https://anaconda.org/bioconda/phanotate
   :alt:   (downloads)
.. |docker_phanotate| image:: https://quay.io/repository/biocontainers/phanotate/status
   :target: https://quay.io/repository/biocontainers/phanotate
.. _`phanotate/tags`: https://quay.io/repository/biocontainers/phanotate?tab=tags


.. raw:: html

    <script>
        var package = "phanotate";
        var versions = ["1.5.1","1.5.0","1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phanotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phanotate/README.html