:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pggb'
.. highlight: bash

pggb
====

.. conda:recipe:: pggb
   :replaces_section_title:
   :noindex:

   This pangenome graph construction pipeline renders a collection of sequences into a pangenome graph \(in the variation graph model\).

   :homepage: https://github.com/pangenome/pggb
   :license: MIT
   :recipe: /`pggb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pggb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pggb/meta.yaml>`_

   


.. conda:package:: pggb

   |downloads_pggb| |docker_pggb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.4-0</code>,  <code>0.5.3-2</code>,  <code>0.5.3-1</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``0.5.4-0``,  ``0.5.3-2``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bc: 
   :depends bcftools: 
   :depends gfaffix: ``0.1.4``
   :depends gsl: ``2.7.0.*``
   :depends idna: ``<3,>=2.5``
   :depends multiqc: ``1.14``
   :depends odgi: ``0.8.3``
   :depends pigz: 
   :depends python-igraph: ``0.10.4``
   :depends seqwish: ``0.7.9``
   :depends smoothxg: ``0.7.0``
   :depends tabix: 
   :depends time: 
   :depends vg: ``1.40.0.*``
   :depends wfmash: ``0.10.3``
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
        var versions = ["0.5.4","0.5.3","0.5.3","0.5.3","0.5.2"];
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