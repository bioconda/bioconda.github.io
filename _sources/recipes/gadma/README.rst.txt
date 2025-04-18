:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gadma'
.. highlight: bash

gadma
=====

.. conda:recipe:: gadma
   :replaces_section_title:
   :noindex:

   Genetic Algorithm for Demographic Inference

   :homepage: https://github.com/ctlab/GADMA
   :documentation: https://gadma.readthedocs.io/en/latest/
   
   :license: LGPL / GNU General Public (GPL)
   :recipe: /`gadma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gadma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gadma/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giaa005`

   


.. conda:package:: gadma

   |downloads_gadma| |docker_gadma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.0-0</code>,  <code>2.0.0rc26-0</code>,  <code>2.0.0rc25-0</code>,  <code>2.0.0rc23-0</code>,  <code>2.0.0rc22-0</code>,  <code>2.0.0rc21-0</code>,  <code>2.0.0rc20-0</code>,  </span></summary>
      

      ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.0-0``,  ``2.0.0rc26-0``,  ``2.0.0rc25-0``,  ``2.0.0rc23-0``,  ``2.0.0rc22-0``,  ``2.0.0rc21-0``,  ``2.0.0rc20-0``,  ``2.0.0rc19-0``,  ``2.0.0rc18-2``,  ``2.0.0rc18-1``,  ``2.0.0rc18-0``,  ``2.0.0rc17-0``,  ``2.0.0rc16-0``

      
      .. raw:: html

         </details>
      

   
   :depends dadi: 
   :depends demes: 
   :depends demesdraw: 
   :depends h5py: ``3.10.0``
   :depends matplotlib-base: 
   :depends moments: 
   :depends mpmath: 
   :depends networkx: 
   :depends nlopt: 
   :depends numpy: 
   :depends pandas: ``<=2.2.2``
   :depends pillow: 
   :depends python: ``>=3.6``
   :depends ruamel.yaml: ``0.16.12``
   :depends scikit-allel: 
   :depends scipy: ``<1.14``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gadma

   and update with::

      mamba update gadma

  To create a new environment, run::

      mamba create --name myenvname gadma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gadma:<tag>

   (see `gadma/tags`_ for valid values for ``<tag>``)


.. |downloads_gadma| image:: https://img.shields.io/conda/dn/bioconda/gadma.svg?style=flat
   :target: https://anaconda.org/bioconda/gadma
   :alt:   (downloads)
.. |docker_gadma| image:: https://quay.io/repository/biocontainers/gadma/status
   :target: https://quay.io/repository/biocontainers/gadma
.. _`gadma/tags`: https://quay.io/repository/biocontainers/gadma?tab=tags


.. raw:: html

    <script>
        var package = "gadma";
        var versions = ["2.0.3","2.0.2","2.0.0","2.0.0rc26","2.0.0rc25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gadma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gadma/README.html