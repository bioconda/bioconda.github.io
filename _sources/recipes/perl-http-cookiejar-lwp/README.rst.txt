:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-cookiejar-lwp'
.. highlight: bash

perl-http-cookiejar-lwp
=======================

.. conda:recipe:: perl-http-cookiejar-lwp
   :replaces_section_title:
   :noindex:

   A minimalist HTTP user agent cookie jar.

   :homepage: https://github.com/dagolden/HTTP-CookieJar
   :documentation: https://metacpan.org/pod/HTTP::CookieJar
   
   :license: APACHE / Apache-2.0
   :recipe: /`perl-http-cookiejar-lwp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookiejar-lwp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookiejar-lwp/meta.yaml>`_

   


.. conda:package:: perl-http-cookiejar-lwp

   |downloads_perl-http-cookiejar-lwp| |docker_perl-http-cookiejar-lwp|

   :versions:
      
      

      ``0.014-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-http-date: 
   :depends on perl-parent: 
   :depends on perl-time-local: 

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

    pixi global install perl-http-cookiejar-lwp

to add into an existing workspace instead, run::

    pixi add perl-http-cookiejar-lwp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-http-cookiejar-lwp

Alternatively, to install into a new environment, run::

    conda create -n envname perl-http-cookiejar-lwp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-http-cookiejar-lwp:<tag>

(see `perl-http-cookiejar-lwp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-http-cookiejar-lwp| image:: https://img.shields.io/conda/dn/bioconda/perl-http-cookiejar-lwp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-cookiejar-lwp
   :alt:   (downloads)
.. |docker_perl-http-cookiejar-lwp| image:: https://quay.io/repository/biocontainers/perl-http-cookiejar-lwp/status
   :target: https://quay.io/repository/biocontainers/perl-http-cookiejar-lwp
.. _`perl-http-cookiejar-lwp/tags`: https://quay.io/repository/biocontainers/perl-http-cookiejar-lwp?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-cookiejar-lwp";
        var versions = ["0.014"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-cookiejar-lwp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-cookiejar-lwp/README.html