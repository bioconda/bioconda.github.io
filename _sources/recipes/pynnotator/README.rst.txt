:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pynnotator'
.. highlight: bash

pynnotator
==========

.. conda:recipe:: pynnotator
   :replaces_section_title:
   :noindex:

   A Python Annotation Framework for VCFs using multiple tools.

   :homepage: http://github.com/raonyguimaraes/pynnotator
   :license: BSD / BSD
   :recipe: /`pynnotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynnotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynnotator/meta.yaml>`_

   


.. conda:package:: pynnotator

   |downloads_pynnotator| |docker_pynnotator|

   :versions:
      
      

      ``2.0-0``,  ``1.9.4-0``,  ``1.9.3-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9-0``,  ``1.8-1``,  ``1.8-0``

      

   
   :depends distro: 
   :depends pysam: ``>=0.15``
   :depends python: ``>=3``
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

      mamba install pynnotator

   and update with::

      mamba update pynnotator

  To create a new environment, run::

      mamba create --name myenvname pynnotator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pynnotator:<tag>

   (see `pynnotator/tags`_ for valid values for ``<tag>``)


.. |downloads_pynnotator| image:: https://img.shields.io/conda/dn/bioconda/pynnotator.svg?style=flat
   :target: https://anaconda.org/bioconda/pynnotator
   :alt:   (downloads)
.. |docker_pynnotator| image:: https://quay.io/repository/biocontainers/pynnotator/status
   :target: https://quay.io/repository/biocontainers/pynnotator
.. _`pynnotator/tags`: https://quay.io/repository/biocontainers/pynnotator?tab=tags


.. raw:: html

    <script>
        var package = "pynnotator";
        var versions = ["2.0","1.9.4","1.9.3","1.9.2","1.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pynnotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pynnotator/README.html