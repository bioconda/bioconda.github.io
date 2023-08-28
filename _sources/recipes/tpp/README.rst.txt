:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tpp'
.. highlight: bash

tpp
===

.. conda:recipe:: tpp
   :replaces_section_title:
   :noindex:

   The Trans\-Proteomic Pipeline \(TPP\) is a collection of integrated tools for MS\/MS proteomics developed at the Seattle Proteome Center. The Bioconda package includes the command\-line versions of the TPP toolset. These programs include tools for validation \(PeptideProphet\, iProphet\, ProteinProphet\, Mayu\) and quantification \(XPRESS\, ASAPRatio\, Libra\) as well as a number of parsers and converters \(Out2XML\, Mascot2XML\, Tandem2XML\, etc\).


   :homepage: http://tools.proteomecenter.org/wiki/index.php?title=Software:TPP
   :license: GPL v. 2.0 and LGPL
   :recipe: /`tpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpp/meta.yaml>`_

   


.. conda:package:: tpp

   |downloads_tpp| |docker_tpp|

   :versions:
      
      

      ``5.0.0-0``

      

   
   :depends bzip2: ``1.0*``
   :depends hardklor: 
   :depends libgcc: ``<=4.9``
   :depends perl: ``5.22.0*``
   :depends perl-findbin-libs: 
   :depends perl-xml-parser: 
   :depends zlib: ``1.2.11*``
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

      mamba install tpp

   and update with::

      mamba update tpp

  To create a new environment, run::

      mamba create --name myenvname tpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tpp:<tag>

   (see `tpp/tags`_ for valid values for ``<tag>``)


.. |downloads_tpp| image:: https://img.shields.io/conda/dn/bioconda/tpp.svg?style=flat
   :target: https://anaconda.org/bioconda/tpp
   :alt:   (downloads)
.. |docker_tpp| image:: https://quay.io/repository/biocontainers/tpp/status
   :target: https://quay.io/repository/biocontainers/tpp
.. _`tpp/tags`: https://quay.io/repository/biocontainers/tpp?tab=tags


.. raw:: html

    <script>
        var package = "tpp";
        var versions = ["5.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tpp/README.html