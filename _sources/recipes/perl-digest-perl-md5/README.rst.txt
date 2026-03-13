:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-digest-perl-md5'
.. highlight: bash

perl-digest-perl-md5
====================

.. conda:recipe:: perl-digest-perl-md5
   :replaces_section_title:
   :noindex:

   Perl Implementation of Rivest\'s MD5 algorithm

   :homepage: http://metacpan.org/pod/Digest-Perl-MD5
   :license: unknown
   :recipe: /`perl-digest-perl-md5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-perl-md5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-perl-md5/meta.yaml>`_

   


.. conda:package:: perl-digest-perl-md5

   |downloads_perl-digest-perl-md5| |docker_perl-digest-perl-md5|

   :versions:
      
      

      ``1.91-0``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``

      

   
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

    pixi global install perl-digest-perl-md5

to add into an existing workspace instead, run::

    pixi add perl-digest-perl-md5

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-digest-perl-md5

Alternatively, to install into a new environment, run::

    conda create -n envname perl-digest-perl-md5

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-digest-perl-md5:<tag>

(see `perl-digest-perl-md5/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-digest-perl-md5| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-perl-md5.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-digest-perl-md5
   :alt:   (downloads)
.. |docker_perl-digest-perl-md5| image:: https://quay.io/repository/biocontainers/perl-digest-perl-md5/status
   :target: https://quay.io/repository/biocontainers/perl-digest-perl-md5
.. _`perl-digest-perl-md5/tags`: https://quay.io/repository/biocontainers/perl-digest-perl-md5?tab=tags


.. raw:: html

    <script>
        var package = "perl-digest-perl-md5";
        var versions = ["1.91","1.9","1.9","1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-perl-md5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-perl-md5/README.html