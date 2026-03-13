:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-minion'
.. highlight: bash

perl-minion
===========

.. conda:recipe:: perl-minion
   :replaces_section_title:
   :noindex:

   Job queue

   :homepage: https://mojolicious.org
   :license: Artistic-2.0
   :recipe: /`perl-minion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-minion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-minion/meta.yaml>`_

   


.. conda:package:: perl-minion

   |downloads_perl-minion| |docker_perl-minion|

   :versions:
      
      

      ``11.0-0``,  ``10.31-0``,  ``10.30-0``,  ``10.29-0``,  ``10.28-0``,  ``10.27-0``,  ``10.26-0``,  ``10.25-0``

      

   
   :depends on perl: ``>5.32*``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-mojo-pg: 
   :depends on perl-mojolicious: 
   :depends on perl-yaml-libyaml: 

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

    pixi global install perl-minion

to add into an existing workspace instead, run::

    pixi add perl-minion

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-minion

Alternatively, to install into a new environment, run::

    conda create -n envname perl-minion

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-minion:<tag>

(see `perl-minion/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-minion| image:: https://img.shields.io/conda/dn/bioconda/perl-minion.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-minion
   :alt:   (downloads)
.. |docker_perl-minion| image:: https://quay.io/repository/biocontainers/perl-minion/status
   :target: https://quay.io/repository/biocontainers/perl-minion
.. _`perl-minion/tags`: https://quay.io/repository/biocontainers/perl-minion?tab=tags


.. raw:: html

    <script>
        var package = "perl-minion";
        var versions = ["11.0","10.31","10.30","10.29","10.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-minion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-minion/README.html