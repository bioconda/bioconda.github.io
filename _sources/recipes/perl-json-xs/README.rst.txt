:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json-xs'
.. highlight: bash

perl-json-xs
============

.. conda:recipe:: perl-json-xs
   :replaces_section_title:
   :noindex:

   JSON serialising\/deserialising\, done correctly and fast

   :homepage: https://metacpan.org/pod/JSON::XS
   :license: GPL-1.0-or-later OR Artistic-1.0-Perl
   :recipe: /`perl-json-xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-xs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-xs/meta.yaml>`_

   


.. conda:package:: perl-json-xs

   |downloads_perl-json-xs| |docker_perl-json-xs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.04-0</code>,  <code>4.03-4</code>,  <code>4.03-3</code>,  <code>4.03-2</code>,  <code>4.03-1</code>,  <code>4.03-0</code>,  <code>4.02-3</code>,  <code>4.02-2</code>,  <code>4.02-1</code>,  </span></summary>
      

      ``4.04-0``,  ``4.03-4``,  ``4.03-3``,  ``4.03-2``,  ``4.03-1``,  ``4.03-0``,  ``4.02-3``,  ``4.02-2``,  ``4.02-1``,  ``4.02-0``,  ``4.0-0``,  ``3.04-0``,  ``2.34-7``,  ``2.34-6``,  ``2.34-5``,  ``2.34-4``,  ``2.34-3``,  ``2.34-2``,  ``2.34-1``,  ``2.34-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-common-sense: 
   :depends on perl-types-serialiser: 

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

    pixi global install perl-json-xs

to add into an existing workspace instead, run::

    pixi add perl-json-xs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-json-xs

Alternatively, to install into a new environment, run::

    conda create -n envname perl-json-xs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-json-xs:<tag>

(see `perl-json-xs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-json-xs| image:: https://img.shields.io/conda/dn/bioconda/perl-json-xs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json-xs
   :alt:   (downloads)
.. |docker_perl-json-xs| image:: https://quay.io/repository/biocontainers/perl-json-xs/status
   :target: https://quay.io/repository/biocontainers/perl-json-xs
.. _`perl-json-xs/tags`: https://quay.io/repository/biocontainers/perl-json-xs?tab=tags


.. raw:: html

    <script>
        var package = "perl-json-xs";
        var versions = ["4.04","4.03","4.03","4.03","4.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-xs/README.html