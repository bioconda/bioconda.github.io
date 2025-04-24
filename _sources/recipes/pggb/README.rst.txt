:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pggb'
.. highlight: bash

pggb
====

.. conda:recipe:: pggb
   :replaces_section_title:
   :noindex:

   PanGenome Graph Building pipeline renders

   :homepage: https://github.com/pangenome/pggb
   :license: MIT
   :recipe: /`pggb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pggb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pggb/meta.yaml>`_

   


.. conda:package:: pggb

   |downloads_pggb| |docker_pggb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-2</code>,  </span></summary>
      

      ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.4-0``,  ``0.5.3-2``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bc: 
   :depends bcftools: 
   :depends gfaffix: ``0.2.1``
   :depends gsl: ``2.7.0.*``
   :depends multiqc: ``1.22``
   :depends odgi: ``0.9.2``
   :depends pigz: 
   :depends python-igraph: ``0.11.5``
   :depends seqwish: ``0.7.11``
   :depends smoothxg: ``0.8.2``
   :depends tabix: 
   :depends time: 
   :depends vcfbub: ``0.1.1``
   :depends vcflib: ``1.0.10``
   :depends vg: ``1.63.1``
   :depends wfmash: ``0.14.0``
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

      mamba install pggb

   and update with::

      mamba update pggb

  To create a new environment, run::

      mamba create --name myenvname pggb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pggb:<tag>

   (see `pggb/tags`_ for valid values for ``<tag>``)


.. |downloads_pggb| image:: https://img.shields.io/conda/dn/bioconda/pggb.svg?style=flat
   :target: https://anaconda.org/bioconda/pggb
   :alt:   (downloads)
.. |docker_pggb| image:: https://quay.io/repository/biocontainers/pggb/status
   :target: https://quay.io/repository/biocontainers/pggb
.. _`pggb/tags`: https://quay.io/repository/biocontainers/pggb?tab=tags


.. raw:: html

    <script>
        var package = "pggb";
        var versions = ["0.7.4","0.7.3","0.7.2","0.7.1","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pggb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pggb/README.html