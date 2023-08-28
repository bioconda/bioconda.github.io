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

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install iptkl

   and update with::

      mamba update iptkl

  To create a new environment, run::

      mamba create --name myenvname iptkl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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