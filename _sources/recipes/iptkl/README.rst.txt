:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iptkl'
.. highlight: bash

iptkl
=====

.. conda:recipe:: iptkl
   :replaces_section_title:
   :noindex:

   IPTK is a library specialized in the analysis of HLA\-peptidomes identified through an immunopeptidomics pipeline.

   :homepage: https://github.com/ikmb/iptoolkit
   :documentation: https://iptk.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`iptkl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iptkl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iptkl/meta.yaml>`_

   


.. conda:package:: iptkl

   |downloads_iptkl| |docker_iptkl|

   :versions:
      
      

      ``0.6.8-0``,  ``0.6.5-0``,  ``0.6.4-0``

      

   
   :depends biopython: 
   :depends bokeh: 
   :depends colour: 
   :depends dash: 
   :depends goatools: 
   :depends h5py: 
   :depends holoviews: 
   :depends logomaker: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends mhcnames: 
   :depends nglview: 
   :depends numba: 
   :depends pandas: 
   :depends plotly: 
   :depends pyopenms: 
   :depends pyteomics: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install iptkl

   and update with::

      conda update iptkl

   or use the docker container::

      docker pull quay.io/biocontainers/iptkl:<tag>

   (see `iptkl/tags`_ for valid values for ``<tag>``)


.. |downloads_iptkl| image:: https://img.shields.io/conda/dn/bioconda/iptkl.svg?style=flat
   :target: https://anaconda.org/bioconda/iptkl
   :alt:   (downloads)
.. |docker_iptkl| image:: https://quay.io/repository/biocontainers/iptkl/status
   :target: https://quay.io/repository/biocontainers/iptkl
.. _`iptkl/tags`: https://quay.io/repository/biocontainers/iptkl?tab=tags


.. raw:: html

    <script>
        var package = "iptkl";
        var versions = ["0.6.8","0.6.5","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iptkl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iptkl/README.html