:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varcode'
.. highlight: bash

varcode
=======

.. conda:recipe:: varcode
   :replaces_section_title:
   :noindex:

   Variant annotation in Python

   :homepage: https://github.com/openvax/varcode
   :license: APACHE / Apache-2.0
   :recipe: /`varcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varcode/meta.yaml>`_

   


.. conda:package:: varcode

   |downloads_varcode| |docker_varcode|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends biopython: ``>=1.64``
   :depends memoized-property: ``>=1.0.2``
   :depends numpy: ``>=1.7``
   :depends pandas: ``>=0.15``
   :depends pyensembl: ``>=1.8.1``
   :depends python: 
   :depends pyvcf3: ``>=1.0.0``
   :depends sercol: ``>=0.1.4``
   :depends serializable: ``>=0.2.1``
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

      mamba install varcode

   and update with::

      mamba update varcode

  To create a new environment, run::

      mamba create --name myenvname varcode

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/varcode:<tag>

   (see `varcode/tags`_ for valid values for ``<tag>``)


.. |downloads_varcode| image:: https://img.shields.io/conda/dn/bioconda/varcode.svg?style=flat
   :target: https://anaconda.org/bioconda/varcode
   :alt:   (downloads)
.. |docker_varcode| image:: https://quay.io/repository/biocontainers/varcode/status
   :target: https://quay.io/repository/biocontainers/varcode
.. _`varcode/tags`: https://quay.io/repository/biocontainers/varcode?tab=tags


.. raw:: html

    <script>
        var package = "varcode";
        var versions = ["1.2.1","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varcode/README.html