:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybel'
.. highlight: bash

pybel
=====

.. conda:recipe:: pybel
   :replaces_section_title:
   :noindex:

   PyBEL is a Python package for parsing and handling biological networks encoded in the Biological Expression Language \(BEL\).

   :homepage: https://pybel.readthedocs.io
   :documentation: https://pybel.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/pybel/pybel
   :license: APACHE / Apache-2.0
   :recipe: /`pybel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybel/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx660`

   


.. conda:package:: pybel

   |downloads_pybel| |docker_pybel|

   :versions:
      
      

      ``0.13.2-0``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.5.4-0``,  ``0.4.0-0``

      

   
   :depends bel-resources: 
   :depends click: 
   :depends click-plugins: 
   :depends networkx: ``>=2.1``
   :depends pyparsing: 
   :depends python: ``>=3.5``
   :depends requests: 
   :depends requests-file: 
   :depends sqlalchemy: 
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

      mamba install pybel

   and update with::

      mamba update pybel

  To create a new environment, run::

      mamba create --name myenvname pybel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybel:<tag>

   (see `pybel/tags`_ for valid values for ``<tag>``)


.. |downloads_pybel| image:: https://img.shields.io/conda/dn/bioconda/pybel.svg?style=flat
   :target: https://anaconda.org/bioconda/pybel
   :alt:   (downloads)
.. |docker_pybel| image:: https://quay.io/repository/biocontainers/pybel/status
   :target: https://quay.io/repository/biocontainers/pybel
.. _`pybel/tags`: https://quay.io/repository/biocontainers/pybel?tab=tags


.. raw:: html

    <script>
        var package = "pybel";
        var versions = ["0.13.2","0.9.3","0.9.3","0.5.4","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybel/README.html