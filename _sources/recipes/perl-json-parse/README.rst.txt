:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json-parse'
.. highlight: bash

perl-json-parse
===============

.. conda:recipe:: perl-json-parse
   :replaces_section_title:
   :noindex:

   Read JSON into a Perl variable

   :homepage: http://metacpan.org/pod/JSON::Parse
   :license: perl_5
   :recipe: /`perl-json-parse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-parse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-parse/meta.yaml>`_

   


.. conda:package:: perl-json-parse

   |downloads_perl-json-parse| |docker_perl-json-parse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.62-5</code>,  <code>0.62-4</code>,  <code>0.62-3</code>,  <code>0.62-2</code>,  <code>0.62-1</code>,  <code>0.62-0</code>,  <code>0.61-1</code>,  <code>0.61-0</code>,  <code>0.55-2</code>,  </span></summary>
      

      ``0.62-5``,  ``0.62-4``,  ``0.62-3``,  ``0.62-2``,  ``0.62-1``,  ``0.62-0``,  ``0.61-1``,  ``0.61-0``,  ``0.55-2``,  ``0.55-1``,  ``0.55-0``,  ``0.49-1``,  ``0.49-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-carp: 

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

    pixi global install perl-json-parse

to add into an existing workspace instead, run::

    pixi add perl-json-parse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-json-parse

Alternatively, to install into a new environment, run::

    conda create -n envname perl-json-parse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-json-parse:<tag>

(see `perl-json-parse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-json-parse| image:: https://img.shields.io/conda/dn/bioconda/perl-json-parse.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json-parse
   :alt:   (downloads)
.. |docker_perl-json-parse| image:: https://quay.io/repository/biocontainers/perl-json-parse/status
   :target: https://quay.io/repository/biocontainers/perl-json-parse
.. _`perl-json-parse/tags`: https://quay.io/repository/biocontainers/perl-json-parse?tab=tags


.. raw:: html

    <script>
        var package = "perl-json-parse";
        var versions = ["0.62","0.62","0.62","0.62","0.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-parse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-parse/README.html