:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hormon'
.. highlight: bash

hormon
======

.. conda:recipe:: hormon
   :replaces_section_title:
   :noindex:

   A tool for annotation of alpha satellite arrays in centromeres of a newly assembled human genome.

   :homepage: https://github.com/ablab/HORmon
   :license: GPL / GPLv2
   :recipe: /`hormon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hormon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hormon/meta.yaml>`_

   HORmon infer human monomers based on the given alpha\-satellite consensus template and centromeric sequence\, extract HORs and decompose centromeric sequence into HORs.


.. conda:package:: hormon

   |downloads_hormon| |docker_hormon|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends clustalo: 
   :depends joblib: 
   :depends networkx: 
   :depends pygraphviz: 
   :depends python: ``>=3.6``
   :depends python-edlib: 
   :depends setuptools: 
   :depends stringdecomposer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hormon

   and update with::

      conda update hormon

   or use the docker container::

      docker pull quay.io/biocontainers/hormon:<tag>

   (see `hormon/tags`_ for valid values for ``<tag>``)


.. |downloads_hormon| image:: https://img.shields.io/conda/dn/bioconda/hormon.svg?style=flat
   :target: https://anaconda.org/bioconda/hormon
   :alt:   (downloads)
.. |docker_hormon| image:: https://quay.io/repository/biocontainers/hormon/status
   :target: https://quay.io/repository/biocontainers/hormon
.. _`hormon/tags`: https://quay.io/repository/biocontainers/hormon?tab=tags


.. raw:: html

    <script>
        var package = "hormon";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hormon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hormon/README.html