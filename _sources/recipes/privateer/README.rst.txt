:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'privateer'
.. highlight: bash

privateer
=========

.. conda:recipe:: privateer
   :replaces_section_title:
   :noindex:

   The Swiss Army knife for carbohydrate structure validation\, refinement and analysis

   :homepage: https://github.com/glycojones/privateer
   :documentation: https://www.ccp4.ac.uk/html/privateer.html
   
   :license: LGPL / LGPL-3.0
   :recipe: /`privateer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/privateer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/privateer/meta.yaml>`_
   :links: doi: :doi:`10.1107/S2053230X24000359`, doi: :doi:`10.1038/nsmb.3115`, doi: :doi:`10.3762/bjoc.16.204`, doi: :doi:`10.1107/S2059798323003510`

   Privateer is a tool for carbohydrate structure validation\, re\-refinement and graphical analysis. It carries out automatic assignments of ring conformation \(IUPAC nomenclature\)\, anomeric form\, absolute configuration and comparison to reference values for validation. It computes omit mFo\-DFc maps and calculates a correlation coefficient between model and electron density. For structure refinement\, it is able to generate chemical dictionaries with unimodal torsion restraints which will help keep the lowest energy conformation. In terms of graphical analysis\, it will produce vector diagrams in SNFG nomenclature \(SVG format\)\, which are annotated using the validation information \(ring conformation\, anomeric form\, etc\).
   Privateer is implemented in C\+\+11 and Python3 \(via pybind11\)\, and produces Scheme and Python scripts for use with Coot \(https\:\/\/github.com\/pemsley\/coot\).



.. conda:package:: privateer

   |downloads_privateer| |docker_privateer|

   :versions:
      
      

      ``MKV-2``,  ``MKV-1``,  ``MKV-0``

      

   
   :depends ccp4srs: ``>=2024.6.14``
   :depends clipper: ``>=2.1.20180802,<3.0a0``
   :depends gemmi: ``<0.6.0``
   :depends libccp4: ``>=8.0.0,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends mmdb2: ``>=2.0.22,<3.0a0``
   :depends numpy: ``1.26.*``
   :depends prettytable: 
   :depends pytest: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends requests: 
   :depends seaborn: 
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

      mamba install privateer

   and update with::

      mamba update privateer

  To create a new environment, run::

      mamba create --name myenvname privateer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/privateer:<tag>

   (see `privateer/tags`_ for valid values for ``<tag>``)


.. |downloads_privateer| image:: https://img.shields.io/conda/dn/bioconda/privateer.svg?style=flat
   :target: https://anaconda.org/bioconda/privateer
   :alt:   (downloads)
.. |docker_privateer| image:: https://quay.io/repository/biocontainers/privateer/status
   :target: https://quay.io/repository/biocontainers/privateer
.. _`privateer/tags`: https://quay.io/repository/biocontainers/privateer?tab=tags


.. raw:: html

    <script>
        var package = "privateer";
        var versions = ["MKV","MKV","MKV"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/privateer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/privateer/README.html