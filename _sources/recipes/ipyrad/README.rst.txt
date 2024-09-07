:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ipyrad'
.. highlight: bash

ipyrad
======

.. conda:recipe:: ipyrad
   :replaces_section_title:
   :noindex:

   Interactive assembly and analysis of RAD\-seq data sets.

   :homepage: http://github.com/dereneaton/ipyrad
   :license: GPL3 / GPL-3.0-only
   :recipe: /`ipyrad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipyrad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipyrad/meta.yaml>`_

   


.. conda:package:: ipyrad

   |downloads_ipyrad| |docker_ipyrad|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.102-0</code>,  <code>0.9.101-0</code>,  <code>0.9.100-0</code>,  <code>0.9.99-0</code>,  <code>0.9.98-0</code>,  <code>0.9.97-0</code>,  <code>0.9.96-0</code>,  <code>0.9.95-0</code>,  <code>0.9.94-0</code>,  </span></summary>
      

      ``0.9.102-0``,  ``0.9.101-0``,  ``0.9.100-0``,  ``0.9.99-0``,  ``0.9.98-0``,  ``0.9.97-0``,  ``0.9.96-0``,  ``0.9.95-0``,  ``0.9.94-0``,  ``0.9.93-0``,  ``0.9.92-0``,  ``0.9.90-0``,  ``0.9.89-0``,  ``0.9.88-0``,  ``0.9.87-0``,  ``0.9.86-0``,  ``0.9.85-0``,  ``0.9.84-1``,  ``0.9.84-0``,  ``0.9.82-0``,  ``0.9.81-0``,  ``0.9.80-0``,  ``0.9.78-0``,  ``0.9.77-0``,  ``0.9.74-0``,  ``0.9.71-0``,  ``0.9.68-0``,  ``0.9.67-0``,  ``0.9.66-0``,  ``0.9.65-0``,  ``0.9.64-0``,  ``0.9.63-0``,  ``0.9.62-0``,  ``0.9.61-0``,  ``0.9.60-0``,  ``0.9.59-0``,  ``0.9.58-0``,  ``0.9.57-0``,  ``0.9.56-1``,  ``0.9.56-0``,  ``0.9.54-0``,  ``0.9.53-0``,  ``0.9.52-0``,  ``0.9.51-0``,  ``0.9.50-0``,  ``0.9.49-0``,  ``0.9.48-0``,  ``0.9.47-0``,  ``0.9.46-0``,  ``0.9.45-0``,  ``0.9.44-0``,  ``0.9.43-0``,  ``0.9.42-0``,  ``0.9.41-0``,  ``0.9.40-0``,  ``0.9.33-0``,  ``0.9.32-0``,  ``0.9.31-0``,  ``0.9.30-0``,  ``0.9.29-0``,  ``0.9.28-0``,  ``0.9.26-0``,  ``0.9.25-0``,  ``0.9.24-0``,  ``0.9.20-0``,  ``0.9.19-1``,  ``0.9.19-0``,  ``0.9.18-0``,  ``0.9.17-0``,  ``0.9.16-0``,  ``0.9.15-0``,  ``0.9.14-0``,  ``0.9.13-0``,  ``0.9.12-0``,  ``0.9.11-1``,  ``0.9.11-0``,  ``0.9.10-0``,  ``0.9.8-0``,  ``0.9.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends bwa: 
   :depends cutadapt: 
   :depends future: 
   :depends h5py: 
   :depends ipyparallel: ``>=6.0.2``
   :depends mpi4py: ``>=3.0``
   :depends muscle: ``<5``
   :depends notebook: 
   :depends numba: ``>=0.37``
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``>=0.15``
   :depends python: 
   :depends requests: 
   :depends samtools: 
   :depends scipy: 
   :depends toyplot: 
   :depends vsearch: ``>=2.13``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ipyrad

   and update with::

      mamba update ipyrad

  To create a new environment, run::

      mamba create --name myenvname ipyrad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ipyrad:<tag>

   (see `ipyrad/tags`_ for valid values for ``<tag>``)


.. |downloads_ipyrad| image:: https://img.shields.io/conda/dn/bioconda/ipyrad.svg?style=flat
   :target: https://anaconda.org/bioconda/ipyrad
   :alt:   (downloads)
.. |docker_ipyrad| image:: https://quay.io/repository/biocontainers/ipyrad/status
   :target: https://quay.io/repository/biocontainers/ipyrad
.. _`ipyrad/tags`: https://quay.io/repository/biocontainers/ipyrad?tab=tags


.. raw:: html

    <script>
        var package = "ipyrad";
        var versions = ["0.9.102","0.9.101","0.9.100","0.9.99","0.9.98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ipyrad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ipyrad/README.html