:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccp4srs'
.. highlight: bash

ccp4srs
=======

.. conda:recipe:: ccp4srs
   :replaces_section_title:
   :noindex:

   CCP4 Storage\, Retrieval and Search framework for small\-molecule data

   :homepage: https://www.ccp4.ac.uk
   :documentation: https://ccp4forge.rc-harwell.ac.uk/ccp4/ccp4srs/-/tree/935b2d99b73f5f8b2396a5f2b6cdc617610131b5/doc-html/html
   
   :developer docs: https://ccp4forge.rc-harwell.ac.uk/ccp4/ccp4srs
   :license: GPL3 / LGPL-3.0
   :recipe: /`ccp4srs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccp4srs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccp4srs/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444994003112`

   CCP4SRS is a vital part of the CCP4 suite designed for handling and generating Crystallographic Information File \(CIF\) library files.
   It provides a robust framework for storing\, retrieving\, and searching small\-molecule crystallographic data.



.. conda:package:: ccp4srs

   |downloads_ccp4srs| |docker_ccp4srs|

   :versions:
      
      

      ``2024.06.14-0``

      

   
   :depends libccp4: ``>=8.0.0,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mmdb2: ``>=2.0.22,<3.0a0``
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

      mamba install ccp4srs

   and update with::

      mamba update ccp4srs

  To create a new environment, run::

      mamba create --name myenvname ccp4srs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ccp4srs:<tag>

   (see `ccp4srs/tags`_ for valid values for ``<tag>``)


.. |downloads_ccp4srs| image:: https://img.shields.io/conda/dn/bioconda/ccp4srs.svg?style=flat
   :target: https://anaconda.org/bioconda/ccp4srs
   :alt:   (downloads)
.. |docker_ccp4srs| image:: https://quay.io/repository/biocontainers/ccp4srs/status
   :target: https://quay.io/repository/biocontainers/ccp4srs
.. _`ccp4srs/tags`: https://quay.io/repository/biocontainers/ccp4srs?tab=tags


.. raw:: html

    <script>
        var package = "ccp4srs";
        var versions = ["2024.06.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccp4srs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccp4srs/README.html