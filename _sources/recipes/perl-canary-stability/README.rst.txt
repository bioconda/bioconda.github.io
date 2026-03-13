:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-canary-stability'
.. highlight: bash

perl-canary-stability
=====================

.. conda:recipe:: perl-canary-stability
   :replaces_section_title:
   :noindex:

   canary to check perl compatibility for schmorp\'s modules

   :homepage: http://metacpan.org/pod/Canary::Stability
   :license: unknown
   :recipe: /`perl-canary-stability <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-canary-stability>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-canary-stability/meta.yaml>`_

   


.. conda:package:: perl-canary-stability

   |downloads_perl-canary-stability| |docker_perl-canary-stability|

   :versions:
      
      

      ``2013-1``,  ``2013-0``,  ``2012-0``,  ``2006-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install perl-canary-stability

to add into an existing workspace instead, run::

    pixi add perl-canary-stability

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-canary-stability

Alternatively, to install into a new environment, run::

    conda create -n envname perl-canary-stability

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-canary-stability:<tag>

(see `perl-canary-stability/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-canary-stability| image:: https://img.shields.io/conda/dn/bioconda/perl-canary-stability.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-canary-stability
   :alt:   (downloads)
.. |docker_perl-canary-stability| image:: https://quay.io/repository/biocontainers/perl-canary-stability/status
   :target: https://quay.io/repository/biocontainers/perl-canary-stability
.. _`perl-canary-stability/tags`: https://quay.io/repository/biocontainers/perl-canary-stability?tab=tags


.. raw:: html

    <script>
        var package = "perl-canary-stability";
        var versions = ["2013","2013","2012","2006"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-canary-stability/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-canary-stability/README.html