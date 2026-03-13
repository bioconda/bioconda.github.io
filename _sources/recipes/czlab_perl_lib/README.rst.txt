:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'czlab_perl_lib'
.. highlight: bash

czlab_perl_lib
==============

.. conda:recipe:: czlab_perl_lib
   :replaces_section_title:
   :noindex:

   mCross Perl script

   :homepage: https://github.com/huijfeng/czlab_perl_lib
   :license: MIT
   :recipe: /`czlab_perl_lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/czlab_perl_lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/czlab_perl_lib/meta.yaml>`_

   czlab\_per\_lib is the core CLI and perl library used in mCross\, which is a bioinformatic tool to identify RNA\-protein cross\-link sites. See details of the methods in Feng et al. \(2019\)\, Modeling the in vivo specificity of RNA\-binding proteins by precisely registering protein\-RNA crosslink sites. Mol Cell. 74\:1189\-1204.E6.


.. conda:package:: czlab_perl_lib

   |downloads_czlab_perl_lib| |docker_czlab_perl_lib|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on perl: ``>=5.32.1``
   :depends on perl-bioperl: ``>=1.7.8``
   :depends on perl-math-cdf: ``>=0.1``

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

    pixi global install czlab_perl_lib

to add into an existing workspace instead, run::

    pixi add czlab_perl_lib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install czlab_perl_lib

Alternatively, to install into a new environment, run::

    conda create -n envname czlab_perl_lib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/czlab_perl_lib:<tag>

(see `czlab_perl_lib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_czlab_perl_lib| image:: https://img.shields.io/conda/dn/bioconda/czlab_perl_lib.svg?style=flat
   :target: https://anaconda.org/bioconda/czlab_perl_lib
   :alt:   (downloads)
.. |docker_czlab_perl_lib| image:: https://quay.io/repository/biocontainers/czlab_perl_lib/status
   :target: https://quay.io/repository/biocontainers/czlab_perl_lib
.. _`czlab_perl_lib/tags`: https://quay.io/repository/biocontainers/czlab_perl_lib?tab=tags


.. raw:: html

    <script>
        var package = "czlab_perl_lib";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/czlab_perl_lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/czlab_perl_lib/README.html