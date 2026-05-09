:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-acme-damn'
.. highlight: bash

perl-acme-damn
==============

.. conda:recipe:: perl-acme-damn
   :replaces_section_title:
   :noindex:

   \'Unbless\' Perl objects.

   :homepage: https://metacpan.org/pod/Acme::Damn
   :license: Perl_5
   :recipe: /`perl-acme-damn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-acme-damn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-acme-damn/meta.yaml>`_

   


.. conda:package:: perl-acme-damn

   |downloads_perl-acme-damn| |docker_perl-acme-damn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.08-9</code>,  <code>0.08-8</code>,  <code>0.08-7</code>,  <code>0.08-6</code>,  <code>0.08-5</code>,  <code>0.08-4</code>,  <code>0.08-3</code>,  <code>0.08-2</code>,  <code>0.08-1</code>,  </span></summary>
      

      ``0.08-9``,  ``0.08-8``,  ``0.08-7``,  ``0.08-6``,  ``0.08-5``,  ``0.08-4``,  ``0.08-3``,  ``0.08-2``,  ``0.08-1``,  ``0.08-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install perl-acme-damn

to add into an existing workspace instead, run::

    pixi add perl-acme-damn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-acme-damn

Alternatively, to install into a new environment, run::

    conda create -n envname perl-acme-damn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-acme-damn:<tag>

(see `perl-acme-damn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-acme-damn| image:: https://img.shields.io/conda/dn/bioconda/perl-acme-damn.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-acme-damn
   :alt:   (downloads)
.. |docker_perl-acme-damn| image:: https://quay.io/repository/biocontainers/perl-acme-damn/status
   :target: https://quay.io/repository/biocontainers/perl-acme-damn
.. _`perl-acme-damn/tags`: https://quay.io/repository/biocontainers/perl-acme-damn?tab=tags


.. raw:: html

    <script>
        var package = "perl-acme-damn";
        var versions = ["0.08","0.08","0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-acme-damn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-acme-damn/README.html