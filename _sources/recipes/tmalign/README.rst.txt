:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tmalign'
.. highlight: bash

tmalign
=======

.. conda:recipe:: tmalign
   :replaces_section_title:
   :noindex:

   TM\-align sequence\-order independent protein structure alignment.

   :homepage: https://seq2fun.dcmb.med.umich.edu//TM-align
   :documentation: https://seq2fun.dcmb.med.umich.edu/TM-align/readme.c++.txt
   
   :license: BSD / BSD-like
   :recipe: /`tmalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmalign/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gki524`, doi: :doi:`10.1002/prot.20264`, biotools: :biotools:`tm-score`

   


.. conda:package:: tmalign

   |downloads_tmalign| |docker_tmalign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20220227-0</code>,  <code>20190822-0</code>,  <code>20170708-7</code>,  <code>20170708-6</code>,  <code>20170708-5</code>,  <code>20170708-4</code>,  <code>20170708-3</code>,  <code>20170708-2</code>,  <code>20170708-1</code>,  </span></summary>
      

      ``20220227-0``,  ``20190822-0``,  ``20170708-7``,  ``20170708-6``,  ``20170708-5``,  ``20170708-4``,  ``20170708-3``,  ``20170708-2``,  ``20170708-1``,  ``20170708-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install tmalign

   and update with::

      mamba update tmalign

  To create a new environment, run::

      mamba create --name myenvname tmalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tmalign:<tag>

   (see `tmalign/tags`_ for valid values for ``<tag>``)


.. |downloads_tmalign| image:: https://img.shields.io/conda/dn/bioconda/tmalign.svg?style=flat
   :target: https://anaconda.org/bioconda/tmalign
   :alt:   (downloads)
.. |docker_tmalign| image:: https://quay.io/repository/biocontainers/tmalign/status
   :target: https://quay.io/repository/biocontainers/tmalign
.. _`tmalign/tags`: https://quay.io/repository/biocontainers/tmalign?tab=tags


.. raw:: html

    <script>
        var package = "tmalign";
        var versions = ["20220227","20190822","20170708","20170708","20170708"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tmalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tmalign/README.html