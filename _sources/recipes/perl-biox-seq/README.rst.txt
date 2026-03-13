:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-biox-seq'
.. highlight: bash

perl-biox-seq
=============

.. conda:recipe:: perl-biox-seq
   :replaces_section_title:
   :noindex:

   a basic but fast biological sequence object and associated parsers

   :homepage: http://metacpan.org/pod/BioX::Seq
   :license: GPL-3.0-or-later
   :recipe: /`perl-biox-seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biox-seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biox-seq/meta.yaml>`_

   


.. conda:package:: perl-biox-seq

   |downloads_perl-biox-seq| |docker_perl-biox-seq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.008009-0</code>,  <code>0.008008-0</code>,  <code>0.008007-0</code>,  <code>0.008006-0</code>,  <code>0.008005-0</code>,  <code>0.008004-1</code>,  <code>0.008004-0</code>,  <code>0.008002-1</code>,  <code>0.008002-0</code>,  </span></summary>
      

      ``0.008009-0``,  ``0.008008-0``,  ``0.008007-0``,  ``0.008006-0``,  ``0.008005-0``,  ``0.008004-1``,  ``0.008004-0``,  ``0.008002-1``,  ``0.008002-0``,  ``0.006007-2``,  ``0.006007-1``,  ``0.006007-0``,  ``0.008-1``,  ``0.008-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-compress-bgzf: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install perl-biox-seq

to add into an existing workspace instead, run::

    pixi add perl-biox-seq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-biox-seq

Alternatively, to install into a new environment, run::

    conda create -n envname perl-biox-seq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-biox-seq:<tag>

(see `perl-biox-seq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-biox-seq| image:: https://img.shields.io/conda/dn/bioconda/perl-biox-seq.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-biox-seq
   :alt:   (downloads)
.. |docker_perl-biox-seq| image:: https://quay.io/repository/biocontainers/perl-biox-seq/status
   :target: https://quay.io/repository/biocontainers/perl-biox-seq
.. _`perl-biox-seq/tags`: https://quay.io/repository/biocontainers/perl-biox-seq?tab=tags


.. raw:: html

    <script>
        var package = "perl-biox-seq";
        var versions = ["0.008009","0.008008","0.008007","0.008006","0.008005"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-biox-seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-biox-seq/README.html