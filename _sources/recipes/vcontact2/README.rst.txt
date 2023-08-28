:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcontact2'
.. highlight: bash

vcontact2
=========

.. conda:recipe:: vcontact2
   :replaces_section_title:
   :noindex:

   Viral Contig Automatic Clustering and Taxonomy

   :homepage: https://bitbucket.org/MAVERICLab/vcontact2
   :documentation: https://bitbucket.org/MAVERICLab/vcontact2/src/master/README.md
   
   :license: GPL / GPL-3.0-only
   :recipe: /`vcontact2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcontact2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcontact2/meta.yaml>`_

   


.. conda:package:: vcontact2

   |downloads_vcontact2| |docker_vcontact2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.3-0</code>,  <code>0.11.2-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.9.19-0</code>,  <code>0.9.18-0</code>,  <code>0.9.17-0</code>,  <code>0.9.16-0</code>,  <code>0.9.15-0</code>,  </span></summary>
      

      ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.9.19-0``,  ``0.9.18-0``,  ``0.9.17-0``,  ``0.9.16-0``,  ``0.9.15-0``,  ``0.9.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends hdf5: ``>=1.10.4``
   :depends networkx: ``>=2.2``
   :depends numpy: ``>=1.20.1``
   :depends pandas: ``>=1.0.5``
   :depends psutil: ``>=5.8.0``
   :depends pyparsing: ``>=2.4.6``
   :depends pytables: ``>=3.4.0``
   :depends python: ``>=3.7``
   :depends scikit-learn: ``>=0.24.1``
   :depends scipy: ``>=1.6.0``
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

      mamba install vcontact2

   and update with::

      mamba update vcontact2

  To create a new environment, run::

      mamba create --name myenvname vcontact2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcontact2:<tag>

   (see `vcontact2/tags`_ for valid values for ``<tag>``)


.. |downloads_vcontact2| image:: https://img.shields.io/conda/dn/bioconda/vcontact2.svg?style=flat
   :target: https://anaconda.org/bioconda/vcontact2
   :alt:   (downloads)
.. |docker_vcontact2| image:: https://quay.io/repository/biocontainers/vcontact2/status
   :target: https://quay.io/repository/biocontainers/vcontact2
.. _`vcontact2/tags`: https://quay.io/repository/biocontainers/vcontact2?tab=tags


.. raw:: html

    <script>
        var package = "vcontact2";
        var versions = ["0.11.3","0.11.2","0.11.1","0.11.0","0.9.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcontact2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcontact2/README.html