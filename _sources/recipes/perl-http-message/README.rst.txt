:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-message'
.. highlight: bash

perl-http-message
=================

.. conda:recipe:: perl-http-message
   :replaces_section_title:
   :noindex:

   HTTP style message \(base class\).

   :homepage: https://github.com/libwww-perl/HTTP-Message
   :license: perl_5
   :recipe: /`perl-http-message <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-message>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-message/meta.yaml>`_

   


.. conda:package:: perl-http-message

   |downloads_perl-http-message| |docker_perl-http-message|

   :versions:
      
      

      ``7.01-0``,  ``7.00-0``,  ``6.44-0``,  ``6.36-0``,  ``6.18-1``,  ``6.18-0``,  ``6.11-1``,  ``6.11-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-base: 
   :depends on perl-carp: 
   :depends on perl-clone: 
   :depends on perl-compress-raw-bzip2: 
   :depends on perl-compress-raw-zlib: 
   :depends on perl-encode: ``>=3.01``
   :depends on perl-encode-locale: 
   :depends on perl-exporter: 
   :depends on perl-file-spec: 
   :depends on perl-http-date: 
   :depends on perl-io-html: 
   :depends on perl-lwp-mediatypes: 
   :depends on perl-mime-base64: 
   :depends on perl-parent: 
   :depends on perl-test-needs: 
   :depends on perl-uri: 
   :depends on perl-url-encode: 

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

    pixi global install perl-http-message

to add into an existing workspace instead, run::

    pixi add perl-http-message

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-http-message

Alternatively, to install into a new environment, run::

    conda create -n envname perl-http-message

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-http-message:<tag>

(see `perl-http-message/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-http-message| image:: https://img.shields.io/conda/dn/bioconda/perl-http-message.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-message
   :alt:   (downloads)
.. |docker_perl-http-message| image:: https://quay.io/repository/biocontainers/perl-http-message/status
   :target: https://quay.io/repository/biocontainers/perl-http-message
.. _`perl-http-message/tags`: https://quay.io/repository/biocontainers/perl-http-message?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-message";
        var versions = ["7.01","7.00","6.44","6.36","6.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-message/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-message/README.html