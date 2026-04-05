:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cgi'
.. highlight: bash

perl-cgi
========

.. conda:recipe:: perl-cgi
   :replaces_section_title:
   :noindex:

   A generic file fetching mechanism.

   :homepage: https://metacpan.org/pod/distribution/CGI/lib/CGI.pod
   :license: GPL
   :recipe: /`perl-cgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cgi/meta.yaml>`_

   


.. conda:package:: perl-cgi

   |downloads_perl-cgi| |docker_perl-cgi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.71-0</code>,  <code>4.70-0</code>,  <code>4.69-0</code>,  <code>4.67-2</code>,  <code>4.67-1</code>,  <code>4.67-0</code>,  <code>4.56-2</code>,  <code>4.56-1</code>,  <code>4.56-0</code>,  </span></summary>
      

      ``4.71-0``,  ``4.70-0``,  ``4.69-0``,  ``4.67-2``,  ``4.67-1``,  ``4.67-0``,  ``4.56-2``,  ``4.56-1``,  ``4.56-0``,  ``4.55-0``,  ``4.54-1``,  ``4.54-0``,  ``4.44-2``,  ``4.44-1``,  ``4.44-0``,  ``4.43-0``,  ``4.40-2``,  ``4.40-1``,  ``4.40-0``,  ``4.22-4``,  ``4.22-3``,  ``4.22-2``,  ``4.22-1``,  ``4.22-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-base: 
   :depends on perl-carp: 
   :depends on perl-encode: 
   :depends on perl-exporter: 
   :depends on perl-file-temp: 
   :depends on perl-html-parser: ``>=3.83,<4.0a0``
   :depends on perl-parent: 
   :depends on perl-test-nowarnings: ``1.06.*``
   :depends on perl-uri: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install perl-cgi

to add into an existing workspace instead, run::

    pixi add perl-cgi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-cgi

Alternatively, to install into a new environment, run::

    conda create -n envname perl-cgi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-cgi:<tag>

(see `perl-cgi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-cgi| image:: https://img.shields.io/conda/dn/bioconda/perl-cgi.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cgi
   :alt:   (downloads)
.. |docker_perl-cgi| image:: https://quay.io/repository/biocontainers/perl-cgi/status
   :target: https://quay.io/repository/biocontainers/perl-cgi
.. _`perl-cgi/tags`: https://quay.io/repository/biocontainers/perl-cgi?tab=tags


.. raw:: html

    <script>
        var package = "perl-cgi";
        var versions = ["4.71","4.70","4.69","4.67","4.67"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cgi/README.html