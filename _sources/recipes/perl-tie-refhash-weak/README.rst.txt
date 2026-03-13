:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-refhash-weak'
.. highlight: bash

perl-tie-refhash-weak
=====================

.. conda:recipe:: perl-tie-refhash-weak/0.09
   :replaces_section_title:
   :noindex:

   A Tie\:\:RefHash subclass with weakened references in the keys.

   :homepage: http://metacpan.org/pod/Tie::RefHash::Weak
   :license: unknown
   :recipe: /`perl-tie-refhash-weak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-refhash-weak>`_/`0.09 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-refhash-weak/0.09>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-refhash-weak/0.09/meta.yaml>`_

   


.. conda:package:: perl-tie-refhash-weak

   |downloads_perl-tie-refhash-weak| |docker_perl-tie-refhash-weak|

   :versions:
      
      

      ``0.09-3``,  ``0.09-2``,  ``0.09-1``,  ``0.09-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-task-weaken: 
   :depends on perl-tie-refhash: 
   :depends on perl-variable-magic: 

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

    pixi global install perl-tie-refhash-weak

to add into an existing workspace instead, run::

    pixi add perl-tie-refhash-weak

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-tie-refhash-weak

Alternatively, to install into a new environment, run::

    conda create -n envname perl-tie-refhash-weak

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-tie-refhash-weak:<tag>

(see `perl-tie-refhash-weak/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-tie-refhash-weak| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-refhash-weak.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-refhash-weak
   :alt:   (downloads)
.. |docker_perl-tie-refhash-weak| image:: https://quay.io/repository/biocontainers/perl-tie-refhash-weak/status
   :target: https://quay.io/repository/biocontainers/perl-tie-refhash-weak
.. _`perl-tie-refhash-weak/tags`: https://quay.io/repository/biocontainers/perl-tie-refhash-weak?tab=tags


.. raw:: html

    <script>
        var package = "perl-tie-refhash-weak";
        var versions = ["0.09","0.09","0.09","0.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-refhash-weak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-refhash-weak/README.html